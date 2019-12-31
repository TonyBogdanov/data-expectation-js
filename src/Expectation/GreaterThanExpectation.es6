/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class GreaterThanExpectation extends AbstractExpectation {

    constructor( value ) {

        super();

        this.value = value;

    }

    getType() {

        return `gt ( ${ this.value } )`;

    }

    expect( data, path = null ) {

        if ( data <= this.value ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
