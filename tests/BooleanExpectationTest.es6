/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import fromDefinition from '../src/Util/fromDefinition';
import BooleanExpectation from '../src/Expectation/BooleanExpectation';

describe( 'BooleanExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new BooleanExpectation();

        expect( expectation.expect( true ) ).to.equal( expectation );
        expect( expectation.expect( false ) ).to.equal( expectation );

    } );
    //
    it( 'testInvalid', () => {

        let expectation = new BooleanExpectation();
        expect( () => expectation.expect( 'string' ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new BooleanExpectation();

        expect( JSON.stringify( fromDefinition( {

            expectationName: BooleanExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
