/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../../../src/Factory';
import ScalarExpectation from '../../../src/Expectation/ScalarExpectation';

describe( 'ScalarExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new ScalarExpectation();

        expect( expectation.expect( 1 ) ).to.equal( expectation );
        expect( expectation.expect( 1.1 ) ).to.equal( expectation );
        expect( expectation.expect( 'string' ) ).to.equal( expectation );
        expect( expectation.expect( true ) ).to.equal( expectation );

    } );

    it( 'testInvalidArray', () => {

        let expectation = new ScalarExpectation();
        expect( () => expectation.expect( [] ) ).to.throw();

    } );

    it( 'testInvalidObject', () => {

        let expectation = new ScalarExpectation();
        expect( () => expectation.expect( {} ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ScalarExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ScalarExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
