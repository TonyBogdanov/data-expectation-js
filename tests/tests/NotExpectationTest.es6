/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../../src/Factory';
import IntegerExpectation from '../../src/Expectation/IntegerExpectation';
import NotExpectation from '../../src/Expectation/NotExpectation';

describe( 'NotExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new NotExpectation( new IntegerExpectation() );

        expect( expectation.expect( 1.1 ) ).to.equal( expectation );
        expect( expectation.expect( 'string' ) ).to.equal( expectation );
        expect( expectation.expect( true ) ).to.equal( expectation );
        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( {} ) ).to.equal( expectation );
        expect( expectation.expect( () => {} ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new NotExpectation( new IntegerExpectation() );
        expect( () => expectation.expect( 1 ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new NotExpectation( new IntegerExpectation() );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: NotExpectation.name,
            expectationArguments: [ {

                expectationName: IntegerExpectation.name,
                expectationArguments: [],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
