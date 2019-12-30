/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import fromDefinition from '../src/Util/fromDefinition';
import EmptyExpectation from '../src/Expectation/EmptyExpectation';

describe( 'EmptyExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new EmptyExpectation();

        expect( expectation.expect( '' ) ).to.equal( expectation );
        expect( expectation.expect( 0 ) ).to.equal( expectation );
        expect( expectation.expect( 0.0 ) ).to.equal( expectation );
        expect( expectation.expect( '0' ) ).to.equal( expectation );
        expect( expectation.expect( null ) ).to.equal( expectation );
        expect( expectation.expect( false ) ).to.equal( expectation );
        expect( expectation.expect( [] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new EmptyExpectation();
        expect( () => expectation.expect( 'string' ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new EmptyExpectation();
        expect( JSON.stringify( fromDefinition( {

            expectationName: EmptyExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
