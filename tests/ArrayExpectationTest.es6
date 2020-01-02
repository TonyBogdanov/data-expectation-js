/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../src/Factory';
import ArrayExpectation from '../src/Expectation/ArrayExpectation';

describe( 'ArrayExpectation.expect()', () => {

    it( 'testValid', () => {

        let expectation = new ArrayExpectation();
        expect( expectation.expect( [] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new ArrayExpectation();
        expect( () => expectation.expect( {} ) ).to.throw();

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ArrayExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ArrayExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
