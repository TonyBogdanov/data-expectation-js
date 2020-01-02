/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../src/Factory';
import RegexPatternExpectation from '../src/Expectation/RegexPatternExpectation';

describe( 'RegexPatternExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new RegexPatternExpectation();
        expect( expectation.expect( '/^\d+$/' ) ).to.equal( expectation );

    } );

    it( 'testInvalidDelimiter', () => {

        let expectation = new RegexPatternExpectation();
        expect( () => expectation.expect( '/^\d+$' ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new RegexPatternExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: RegexPatternExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
