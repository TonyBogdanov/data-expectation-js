/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import Factory from '../../src/Factory';
import LowerThanOrEqualExpectation from '../../src/Expectation/LowerThanOrEqualExpectation';

describe( 'LowerThanOrEqualExpectation.expect()', () => {

    function invalidProvider() {

        return [

            124,
            123.46,

        ];

    }

    it( 'testValid', () => {

        let expectation = new LowerThanOrEqualExpectation( 123 );

        expect( expectation.expect( 123 ) ).to.equal( expectation );
        expect( expectation.expect( 121 ) ).to.equal( expectation );
        expect( expectation.expect( 0 ) ).to.equal( expectation );
        expect( expectation.expect( -123 ) ).to.equal( expectation );

        expectation = new LowerThanOrEqualExpectation( 123.45 );

        expect( expectation.expect( 123.45 ) ).to.equal( expectation );
        expect( expectation.expect( 123.44 ) ).to.equal( expectation );
        expect( expectation.expect( 0 ) ).to.equal( expectation );
        expect( expectation.expect( -123.45 ) ).to.equal( expectation );

    } );

    it( 'testInvalid', () => {

        invalidProvider().forEach( value => {

            let expectation = new LowerThanOrEqualExpectation( 123 );
            expect( () => expectation.expect( value ) ).to.throw();

        } );

    } );

    it( 'testFromDefinition', () => {

        let expectation = new LowerThanOrEqualExpectation( 123 );

        expect( JSON.stringify( Factory.fromDefinition( {

            expectationName: LowerThanOrEqualExpectation.name,
            expectationArguments: [ 123 ],

        } ) ) ).to.equal( JSON.stringify( expectation ) );

    } );

} );
