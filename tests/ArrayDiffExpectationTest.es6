/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import fromDefinition from '../src/Util/fromDefinition';
import ArrayDiffExpectation from '../src/Expectation/ArrayDiffExpectation';
import ValueExpectation from '../src/Expectation/ValueExpectation';

describe( 'ArrayDiffExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ 'a', 'b', 'c' ],
            [ 'string' ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new ArrayDiffExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'c' ] ) );
        expect( expectation.expect( [ 'a', 'b', 'c' ] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new ArrayDiffExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'c', 'd' ] ) );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ArrayDiffExpectation( [ 'a', 'b' ], new ValueExpectation( [ 'c' ] ) );

        expect( JSON.stringify( fromDefinition( {

            expectationName: ArrayDiffExpectation.name,
            expectationArguments: [ [

                'a',
                'b',

            ], {

                expectationName: ValueExpectation.name,
                expectationArguments: [ [ 'c' ] ],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
