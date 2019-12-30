/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import ValueExpectation from '../../src/Expectation/ValueExpectation';

describe( 'ValueExpectation::expect()', () => {

    function invalidProvider() {

        return [

            [ {} ],
            [ 'string' ],
            [ 123.456 ],
            [ null ],
            [ [ 1, false, 'two' ] ],

        ];

    }

    it( 'testValid', () => {

        let stringExpectation = new ValueExpectation( 'hello' );
        expect( stringExpectation.expect( 'hello' ) ).to.equal( stringExpectation );

        let integerExpectation = new ValueExpectation( 123 );
        expect( integerExpectation.expect( 123 ) ).to.equal( integerExpectation );

        let arrayExpectation = new ValueExpectation( [ 1, 'two', false ] );
        expect( arrayExpectation.expect( [ 1, 'two', false ] ) ).to.equal( arrayExpectation );

        let obj1 = { 'foo': 'bar' };
        let obj2 = { 'foo': 'bar' };

        let objectExpectation = new ValueExpectation( obj1 );
        expect( objectExpectation.expect( obj2 ) ).to.equal( objectExpectation );

        let largeData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
            ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
            ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
            ' culpa qui officia deserunt mollit anim id est laborum'.split( ' ' );

        let largeExpectation = new ValueExpectation( largeData );
        expect( largeExpectation.expect( largeData ) ).to.equal( largeExpectation );

    } );

    it( 'testINF', () => {

        let expectation = new ValueExpectation( Infinity );
        expect( expectation.expect( Infinity ) ).to.equal( expectation );

    } );

    it( 'testFunction', () => {

        let expectation = new ValueExpectation( () => {} );
        expect( expectation.expect( () => {} ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let largeData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
            ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
            ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
            ' culpa qui officia deserunt mollit anim id est laborum'.split( ' ' );

        invalidProvider().forEach( value => {

            let expectation = new ValueExpectation( largeData );
            expect( () => expectation.expect( value, 'path.to.value' ) ).to.throw();

        } );

    } );

    it( 'testInvalidINF', () => {

        let expectation = new ValueExpectation( Infinity );
        expect( () => expectation.expect( 123 ) ).to.throw();

    } );

} );
