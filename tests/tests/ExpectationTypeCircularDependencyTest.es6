/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';

import ListExpectation from '../../src/Expectation/ListExpectation';
import CountExpectation from '../../src/Expectation/CountExpectation';

describe( 'Expectation.getType() circular dependency', () => {

    it( 'does not produce maximum stack call exceeded error', () => {

        let countExpectation = new CountExpectation();
        let listExpectation = new ListExpectation( countExpectation );

        countExpectation.expectation = listExpectation;

        expect( () => listExpectation.getType() ).to.not.throw();

    } );

} );
