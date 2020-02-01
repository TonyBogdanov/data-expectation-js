/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../../../src/Factory';
import RegexMatchExpectation from '../../../src/Expectation/RegexMatchExpectation';

describe( 'RegexMatchExpectation.expect()', () => {

    it( 'testValidIP', () => {

        let expectation = new RegexMatchExpectation(

            '/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/'

        );

        expect( expectation.expect( '127.0.0.1' ) ).to.equal( expectation );

    } );

    it( 'testValidNumber', () => {

        let expectation = new RegexMatchExpectation( /^\d+$/ );
        expect( expectation.expect( '123' ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new RegexMatchExpectation( /^\d+$/ );
        expect( () => expectation.expect( 'hello' ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new RegexMatchExpectation( /^\d+$/ );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: RegexMatchExpectation.name,
            expectationArguments: [ '/^\\d+$/' ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
