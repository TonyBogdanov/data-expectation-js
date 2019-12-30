/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import fromDefinition from '../src/Util/fromDefinition';
import StringExpectation from '../src/Expectation/StringExpectation';

describe( 'StringExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new StringExpectation();
        expect( expectation.expect( 'hello' ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new StringExpectation();
        expect( () => expectation.expect( 1 ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new StringExpectation();
        expect( JSON.stringify( fromDefinition( {

            expectationName: StringExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
