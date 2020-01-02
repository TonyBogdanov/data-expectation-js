/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../src/Factory';
import ValueExpectation from '../src/Expectation/ValueExpectation';
import ArrayIntersectExpectation from '../src/Expectation/ArrayIntersectExpectation';

describe( 'ArrayIntersectExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ 'b', 'c', 'd' ],
            [ 'string' ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new ArrayIntersectExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'a', 'b' ] ) );
        expect( expectation.expect( [ 'a', 'b', 'c' ] ) ).to.equal( expectation );

        expectation = new ArrayIntersectExpectation( [ 'a', 'b', 'c' ], new ValueExpectation( [ 'a', 'b' ] ) );
        expect( expectation.expect( [ 'a', 'b' ] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new ArrayIntersectExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'a', 'b' ] ) );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ArrayIntersectExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'a', 'b' ] ) );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ArrayIntersectExpectation.name,
            expectationArguments: [ [

                'a',
                'b',

            ], {

                expectationName: ValueExpectation.name,
                expectationArguments: [ [ 'a', 'b' ] ],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
