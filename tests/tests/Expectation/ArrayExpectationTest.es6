/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../../src/Factory';
import ArrayExpectation from '../../../src/Expectation/ArrayExpectation';

describe( 'ArrayExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new ArrayExpectation();

        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( {} ) ).to.equal( expectation );
        expect( expectation.expect( [ 'a' ] ) ).to.equal( expectation );
        expect( expectation.expect( { 'a': 'a' } ) ).to.equal( expectation );

    } );

    it( 'testInvalidType', () => {

        let expectation = new ArrayExpectation();
        expect( () => expectation.expect( 123 ) ).to.throw();

    } );

    it( 'testInvalidObject', () => {

        class TestClass {}

        let expectation = new ArrayExpectation();
        expect( () => expectation.expect( new TestClass() ) ).to.throw();

    } );

    it( 'testInvalidNull', () => {

        let expectation = new ArrayExpectation();
        expect( () => expectation.expect( null ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ArrayExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ArrayExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
