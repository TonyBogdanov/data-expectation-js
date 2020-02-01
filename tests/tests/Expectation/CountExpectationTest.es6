/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../../../src/Factory';
import CountExpectation from '../../../src/Expectation/CountExpectation';
import ValueExpectation from '../../../src/Expectation/ValueExpectation';

describe( 'CountExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ [ 'a', 'b', 'c' ], 4 ],
            [ [], 1 ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new CountExpectation( new ValueExpectation( 0 ) );
        expect( expectation.expect( [] ) ).to.equal( expectation );

        expectation = new CountExpectation( new ValueExpectation( 3 ) );
        expect( expectation.expect( [ 'a', 'b', 'c' ] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( ( value, length ) => {

            let expectation = new CountExpectation( new ValueExpectation( length ) );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new CountExpectation( new ValueExpectation( 0 ) );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: CountExpectation.name,
            expectationArguments: [ {

                expectationName: ValueExpectation.name,
                expectationArguments: [ 0 ],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
