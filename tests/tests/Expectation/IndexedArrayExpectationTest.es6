/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../../src/Factory';
import IndexedArrayExpectation from '../../../src/Expectation/IndexedArrayExpectation';

describe( 'IndexedArrayExpectation.expect()', () => {

    function invalidProvider() {

        return [

            null,
            123,
            { m: {} },
            { 0: 'one', 2: 'two', 3: 'three' },
            { 'one': 'one', 'two': 'two', 'three': 'three' },

        ];

    }

    it( 'testValid', () => {

        let expectation = new IndexedArrayExpectation();

        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( {} ) ).to.equal( expectation );
        expect( expectation.expect( [ 'one', 'two', 'three' ] ) ).to.equal( expectation );
        expect( expectation.expect( { 0: 'one', 1: 'two', 2: 'three' } ) ).to.equal( expectation );
        expect( expectation.expect( { 0: 'one', 2: 'two', 1: 'three' } ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new IndexedArrayExpectation();
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new IndexedArrayExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: IndexedArrayExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
