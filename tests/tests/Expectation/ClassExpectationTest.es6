/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import ClassExpectation from '../../../src/Expectation/ClassExpectation';
import TestClass from '../../helpers/TestClass';
import Factory from '../../../src/Factory';

describe( 'ClassExpectation.expect()', () => {

    function validProvider() {

        return [

            [ TestClass, new TestClass() ],
            [ Date, new Date() ],
            [ Promise, Promise.resolve() ],

        ];

    }

    function invalidProvider() {

        return [

            [ TestClass, true ],
            [ TestClass, 123 ],
            [ TestClass, 123.456 ],
            [ TestClass, 'string' ],
            [ TestClass, [] ],
            [ TestClass, {} ],
            [ TestClass, new Date() ],
            [ Date, Promise.resolve() ],
            [ Promise, new TestClass() ],

        ];

    }

    it( 'testValid', () => {

        validProvider().forEach( ( [ constructor, instance ] ) => {

            let expectation = new ClassExpectation( constructor );
            expect( expectation.expect( instance ) ).to.equal( expectation );

        } );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( ( [ constructor, instance ] ) => {

            let expectation = new ClassExpectation( constructor );
            expect( () => expectation.expect( instance ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new ClassExpectation( TestClass );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: ClassExpectation.name,
            expectationArguments: [ TestClass ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
