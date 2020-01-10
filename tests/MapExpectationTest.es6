/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from "chai";

import Factory from '../src/Factory';
import StringExpectation from '../src/Expectation/StringExpectation';
import IntegerExpectation from '../src/Expectation/IntegerExpectation';
import ArrayExpectation from '../src/Expectation/ArrayExpectation';
import ListExpectation from '../src/Expectation/ListExpectation';
import BooleanExpectation from '../src/Expectation/BooleanExpectation';
import AndExpectation from '../src/Expectation/AndExpectation';
import MapExpectation from '../src/Expectation/MapExpectation';

describe( 'MapExpectation.expect()', () => {

    function invalidProvider() {

        return [ {

            'string': 123,
            'integer': 123,
            'array': { 0: 'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 'string',
            'array': { 0:  'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': 'string',
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': { 0:  'test', 'foo': 'bar' },
            'list': 'string',
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': { 0:  'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 123,
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': { 0:  'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 'string',
                'array': { 0:  'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': { 0:  'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': 'string',
                'list': [ true, false ],

            },

        }, {

            'string': 'string',
            'integer': 123,
            'array': { 0:  'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0:  'test', 'foo': 'bar' },
                'list': 'string',

            },

        } ];

    }

    it( 'testValid', () => {

        let expectation = new MapExpectation( {

            'string': new StringExpectation(),
            'integer': new IntegerExpectation(),
            'array': new ArrayExpectation(),
            'list': new ListExpectation( new BooleanExpectation() ),
            'map': new MapExpectation( {

                'string': new StringExpectation(),
                'integer': new IntegerExpectation(),
                'array': new ArrayExpectation(),
                'list': new ListExpectation( new BooleanExpectation() ),

            } ),

        } );

        expect( expectation.expect( {

            'string': 'string',
            'integer': 123,
            'array': { 0: 'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0: 'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        } ) ).to.equal( expectation );

    } );

    it( 'testValidExtraKeys', () => {

        let expectation = new MapExpectation( {

            'integer': new IntegerExpectation(),
            'array': new ArrayExpectation(),
            'list': new ListExpectation( new BooleanExpectation() ),
            'map': new MapExpectation( {

                'string': new StringExpectation(),
                'integer': new IntegerExpectation(),
                'array': new ArrayExpectation(),
                'list': new ListExpectation( new BooleanExpectation() ),

            } ),

        } );

        expect( expectation.expect( {

            'string': 'string',
            'integer': 123,
            'array': { 0: 'test', 'foo': 'bar' },
            'list': [ true, false ],
            'map': {

                'string': 'string',
                'integer': 123,
                'array': { 0: 'test', 'foo': 'bar' },
                'list': [ true, false ],

            },

        } ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        let expectation = new MapExpectation( {

            'string': new StringExpectation(),
            'integer': new IntegerExpectation(),
            'array': new ArrayExpectation(),
            'list': new AndExpectation(

                new ArrayExpectation(),
                new ListExpectation( new BooleanExpectation() )

            ),
            'map': new MapExpectation( {

                'string': new StringExpectation(),
                'integer': new IntegerExpectation(),
                'array': new ArrayExpectation(),
                'list': new AndExpectation(

                    new ArrayExpectation(),
                    new ListExpectation( new BooleanExpectation() )

                ),

            } ),

        } );

        invalidProvider().forEach( value => expect( () => expectation.expect( value ) ).to.throw() );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new MapExpectation( {

            'string': new StringExpectation(),
            'integer': new IntegerExpectation(),

        } );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: MapExpectation.name,
            expectationArguments: [ {

                'string': {

                    expectationName: StringExpectation.name,
                    expectationArguments: [],

                },
                'integer': {

                    expectationName: IntegerExpectation.name,
                    expectationArguments: [],

                },

            } ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
