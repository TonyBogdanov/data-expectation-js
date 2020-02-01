/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../../src/Factory';
import StringExpectation from '../../../src/Expectation/StringExpectation';
import ListExpectation from '../../../src/Expectation/ListExpectation';
import IntegerExpectation from '../../../src/Expectation/IntegerExpectation';
import ArrayKeysExpectation from '../../../src/Expectation/ArrayKeysExpectation';
import EnumExpectation from '../../../src/Expectation/EnumExpectation';
import ValueExpectation from '../../../src/Expectation/ValueExpectation';

describe( 'ArrayKeysExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ {} ],
            { 1: 'string' },

        ];

    }

    it( 'testValid', () => {

        let stringExpectation = new ArrayKeysExpectation( new ListExpectation( new StringExpectation() ) );

        expect( stringExpectation.expect( [] ) ).to.equal( stringExpectation );
        expect( stringExpectation.expect( { 'key1': 1, 'key2': 'string' } ) ).to.equal( stringExpectation );

        let integerExpectation = new ArrayKeysExpectation( new ListExpectation( new IntegerExpectation() ) );

        expect( integerExpectation.expect( [] ) ).to.equal( integerExpectation );
        expect( integerExpectation.expect( { 0: 'one', 1: 'two', 5: 'three' } ) ).to.equal( integerExpectation );

        let enumExpectation = new ArrayKeysExpectation( new ListExpectation( new EnumExpectation( [ 'a', 'b', 'c' ] ) ) );

        expect( enumExpectation.expect( [] ) ).to.equal( enumExpectation );
        expect( enumExpectation.expect( { 'a': 'this is a', 'c': 'this is c' } ) ).to.equal( enumExpectation );

        let valueExpectation = new ArrayKeysExpectation( new ValueExpectation( [ 'foo', 'bar' ] ) );
        expect( valueExpectation.expect( { 'foo': 'hello', 'bar': 'world' } ) ).to.equal( valueExpectation );

        let sortedExpectation = new ArrayKeysExpectation( new ValueExpectation( [ 'a', 'b', 'c' ] ), true );
        expect( sortedExpectation.expect( { 'b': 'b', 'c': 'c', 'a': 'a' } ) ).to.equal( sortedExpectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new ArrayKeysExpectation( new ListExpectation( new StringExpectation() ) );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ArrayKeysExpectation( new ListExpectation( new StringExpectation() ) );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ArrayKeysExpectation.name,
            expectationArguments: [ {

                expectationName: ListExpectation.name,
                expectationArguments: [ {

                    expectationName: StringExpectation.name,
                    expectationArguments: [],

                } ],

            }, false ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
