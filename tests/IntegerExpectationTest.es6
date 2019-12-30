/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import fromDefinition from '../src/Util/fromDefinition';
import IntegerExpectation from '../src/Expectation/IntegerExpectation';

describe( 'IntegerExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new IntegerExpectation();
        expect( expectation.expect( 1 ) ).to.equal( expectation );

    } );

    it( 'testInvalidString', () => {

        let expectation = new IntegerExpectation();
        expect( () => expectation.expect( 'string' ) ).to.throw();

    } );

    it( 'testInvalidFloat', () => {

        let expectation = new IntegerExpectation();
        expect( () => expectation.expect( 123.45 ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new IntegerExpectation();
        expect( JSON.stringify( fromDefinition( {

            expectationName: IntegerExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
