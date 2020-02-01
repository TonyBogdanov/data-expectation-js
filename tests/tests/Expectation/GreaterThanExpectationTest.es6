/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../../src/Factory';
import GreaterThanExpectation from '../../../src/Expectation/GreaterThanExpectation';

describe( 'GreaterThanExpectation.expect()', () => {

    function invalidProvider() {

        return [

            123,
            122,
            0,
            -123,
            122.45,
            -123.45,

        ];

    }

    it( 'testValid', () => {

        let expectation = new GreaterThanExpectation( 123 );

        expect( expectation.expect( 124 ) ).to.equal( expectation );
        expect( expectation.expect( 999 ) ).to.equal( expectation );

        expectation = new GreaterThanExpectation( 123.45 );

        expect( expectation.expect( 123.46 ) ).to.equal( expectation );
        expect( expectation.expect( 999.99 ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new GreaterThanExpectation( 123 );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new GreaterThanExpectation( 123 );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: GreaterThanExpectation.name,
            expectationArguments: [ 123 ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
