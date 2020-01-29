/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class OrExpectation extends AbstractExpectation {

    constructor( left, right, ...extra ) {

        super();

        this.expectations = [ left, right, ...extra ];

    }

    getType() {

        return `or (\n${ this.expectations.map( expectation =>
            this.indent( `${ expectation.getType() };` ) ).join( `\n` ) }\n)`;

    }

    expect( data, path = null ) {

        for ( let expectation of this.expectations ) {

            try {

                expectation.expect( data, path );
                return this;

            } catch ( e ) {}

        }

        throw new UnexpectedDataException( data, this, path );

    }

}
