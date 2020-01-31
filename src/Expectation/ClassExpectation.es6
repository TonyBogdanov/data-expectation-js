/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import isObject from 'data-types-js/src/is/isObject';

export default class ClassExpectation extends AbstractExpectation {

    constructor( constructor ) {

        super();

        this.constructor = constructor;

    }

    getType() {

        return this.constructor.name;

    }

    expect( data, path = null ) {

        if ( ! ( data instanceof this.constructor ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
