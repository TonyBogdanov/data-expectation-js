/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../src/Factory';
import AssociativeArrayExpectation from '../src/Expectation/AssociativeArrayExpectation';

describe( 'AssociativeArrayExpectation.expect()', () => {

    function invalidProvider() {

        return [

            null,
            123,
            [ {} ],
            { 0: {} },
            [ 'one', 'two', 'three' ],
            { 0: 'one', 1: 'two', 2: 'three' },
            { 0: 'one', 2: 'two', 1: 'three' },

        ];

    }

    it( 'testValid', () => {

        let expectation = new AssociativeArrayExpectation();

        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( { 0: 'one', 2: 'two', 3: 'three' } ) ).to.equal( expectation );
        expect( expectation.expect( { 'one': 'one', 'two': 'two', 'three': 'three' } ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new AssociativeArrayExpectation();
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new AssociativeArrayExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: AssociativeArrayExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
