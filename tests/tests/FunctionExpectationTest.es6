/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../../src/Factory';
import FunctionExpectation from '../../src/Expectation/FunctionExpectation';

describe( 'FunctionExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new FunctionExpectation();
        expect( expectation.expect( () => {} ) ).to.equal( expectation );

    } );

    it( 'testInvalidString', () => {

        let expectation = new FunctionExpectation();
        expect( () => expectation.expect( 'string' ) ).to.throw();

    } );

    it( 'testInvalidFloat', () => {

        let expectation = new FunctionExpectation();
        expect( () => expectation.expect( 123.45 ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new FunctionExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: FunctionExpectation.name,
            expectationArguments: [ () => {} ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
