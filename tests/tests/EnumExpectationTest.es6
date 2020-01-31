/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../src/Factory';
import EnumExpectation from '../../src/Expectation/EnumExpectation';

describe( 'EnumExpectation.expect()', () => {

    function invalidProvider() {

        return [

            false,
            124,
            [],
            'hell',

        ];

    }

    it( 'testValid', () => {

        let expectation = new EnumExpectation( [ true, 123, null, 'hello' ] );

        expect( expectation.expect( true ) ).to.equal( expectation );
        expect( expectation.expect( 123 ) ).to.equal( expectation );
        expect( expectation.expect( null ) ).to.equal( expectation );
        expect( expectation.expect( 'hello' ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new EnumExpectation( [ true, 123, null, 'hello' ] );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new EnumExpectation( [ true, 123, null, 'hello' ] );
        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: EnumExpectation.name,
            expectationArguments: [ [ true, 123, null, 'hello' ] ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
