/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class StringLengthExpectation extends AbstractExpectation {

    constructor( expectation ) {

        super();

        this.expectation = expectation;

    }

    getType() {

        return `stringLength (\n${ this.indent( this.expectation.getType() ) }\n)`;

    }

    expect( data, path = null ) {

        try {

            this.expectation.expect( data.length, path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
