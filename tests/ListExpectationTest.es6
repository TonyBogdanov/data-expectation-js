/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import fromDefinition from '../src/Util/fromDefinition';
import StringExpectation from '../src/Expectation/StringExpectation';
import ListExpectation from '../src/Expectation/ListExpectation';
import IntegerExpectation from '../src/Expectation/IntegerExpectation';

describe( 'ListExpectation.expect()', () => {

    function invalidProvider() {

        return [

            [ {} ],
            [ 'string' ],
            [ 123.456 ],
            [ null ],
            [ [] ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new ListExpectation( new StringExpectation() );

        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( [ 'string', 'another string' ] ) ).to.equal( expectation );

    } );

    it( 'testValidCompound', () => {

        let expectation = new ListExpectation( new ListExpectation( new StringExpectation() ) );

        expect( expectation.expect( [] ) ).to.equal( expectation );
        expect( expectation.expect( [ [ 'string', ], [ 'another string' ] ] ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new ListExpectation( new IntegerExpectation() );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ListExpectation( new StringExpectation() );
        expect( JSON.stringify( fromDefinition( {

            expectationName: ListExpectation.name,
            expectationArguments: [ {

                expectationName: StringExpectation.name,
                expectationArguments: [],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
