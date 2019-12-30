/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class AndExpectation extends AbstractExpectation {

    constructor( left, right, ...extra ) {

        super();

        this.expectations = [ left, right, ...extra ];

    }

    getType() {

        return `and (\n${ this.expectations.map( expectation => this.indent( `${ expectation.getType() };\n` ) ) })`;

    }

    expect( data, path = null ) {

        for ( let expectation of this.expectations ) {

            try {

                expectation.expect( data, path );

            } catch ( e ) {

                throw new UnexpectedDataException( data, this, path, e );

            }

        }

        return this;

    }

}
