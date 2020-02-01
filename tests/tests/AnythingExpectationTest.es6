/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../src/Factory';
import AnythingExpectation from '../../src/Expectation/AnythingExpectation';

describe( 'AnythingExpectation.expect()', () => {

    function validProvider() {

        return [

            null,
            true,
            123,
            123.456,
            'string',
            [],
            {},
            new Date(),
            () => {},

        ];

    }

    it( 'testValid', () => {

        validProvider().forEach( value => {

            let expectation = new AnythingExpectation();
            expect( expectation.expect( value ) ).to.equal( expectation );

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new AnythingExpectation();
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: AnythingExpectation.name,
            expectationArguments: [],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
