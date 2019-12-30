/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import fromDefinition from '../src/Util/fromDefinition';
import StringLengthExpectation from '../src/Expectation/StringLengthExpectation';
import ValueExpectation from '../src/Expectation/ValueExpectation';

describe( 'StringLengthExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ 'hello', 4 ],
            [ '', 1 ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new StringLengthExpectation( new ValueExpectation( 0 ) );
        expect( expectation.expect( '' ) ).to.equal( expectation );

        expectation = new StringLengthExpectation( new ValueExpectation( 5 ) );
        expect( expectation.expect( 'hello' ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( ( value, length ) => {

            let expectation = new StringLengthExpectation( new ValueExpectation( length ) );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new StringLengthExpectation( new ValueExpectation( 0 ) );
        expect( JSON.stringify( fromDefinition( {

            expectationName: StringLengthExpectation.name,
            expectationArguments: [ {

                expectationName: ValueExpectation.name,
                expectationArguments: [ 0 ],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
