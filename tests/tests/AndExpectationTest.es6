/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../src/Factory';
import AndExpectation from '../../src/Expectation/AndExpectation';
import NotExpectation from '../../src/Expectation/NotExpectation';
import EmptyExpectation from '../../src/Expectation/EmptyExpectation';
import StringExpectation from '../../src/Expectation/StringExpectation';

describe( 'AndExpectation.expect()', () => {

    function invalidProvider() {

        return [

            '',
            null,
            0,

        ];

    }

    it( 'testValid', () => {

        let nonEmptyStringExpectation = new AndExpectation(

            new NotExpectation( new EmptyExpectation() ),
            new StringExpectation()

        );

        let emptyStringExpectation = new AndExpectation(

            new EmptyExpectation(),
            new StringExpectation()

        );

        expect( nonEmptyStringExpectation.expect( 'string' ) ).to.equal( nonEmptyStringExpectation );
        expect( emptyStringExpectation.expect( '' ) ).to.equal( emptyStringExpectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new AndExpectation(

                new NotExpectation( new EmptyExpectation() ),
                new StringExpectation()

            );

            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new AndExpectation(

            new NotExpectation( new EmptyExpectation() ),
            new StringExpectation()

        );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: AndExpectation.name,
            expectationArguments: [ {

                expectationName: NotExpectation.name,
                expectationArguments: [ {

                    expectationName: StringExpectation.name,
                    expectationArguments: [],

                } ],

            }, {

                expectationName: StringExpectation.name,
                expectationArguments: [],

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
