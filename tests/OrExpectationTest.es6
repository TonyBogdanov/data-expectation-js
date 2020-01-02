/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../src/Factory';
import StringExpectation from '../src/Expectation/StringExpectation';
import OrExpectation from '../src/Expectation/OrExpectation';
import BooleanExpectation from '../src/Expectation/BooleanExpectation';
import IntegerExpectation from '../src/Expectation/IntegerExpectation';

describe( 'OrExpectation.expect()', () => {

    function invalidProvider() {

        return [

            123.456,
            null,
            [ {} ],
            [ 'one', 'two', 'three' ],

        ];

    }

    it( 'testValid', () => {

        let expectation = new OrExpectation(

            new BooleanExpectation(),
            new IntegerExpectation(),
            new StringExpectation()

        );

        expect( expectation.expect( true ) ).to.equal( expectation );
        expect( expectation.expect( 123 ) ).to.equal( expectation );
        expect( expectation.expect( 'string' ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new OrExpectation(

                new BooleanExpectation(),
                new IntegerExpectation(),
                new StringExpectation()

            );

            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new OrExpectation(

            new BooleanExpectation(),
            new IntegerExpectation(),
            new StringExpectation()

        );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: OrExpectation.name,
            expectationArguments: [ {

                expectationName: BooleanExpectation.name,
                expectationArguments: [],

            }, {

                expectationName: IntegerExpectation.name,
                expectationArguments: [],

            }, {

                expectationName: StringExpectation.name,
                expectationArguments: [],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
