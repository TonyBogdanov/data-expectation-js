/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isFunction from 'data-types-js/src/is/isFunction';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class FunctionExpectation extends AbstractExpectation {

    getType() {

        return 'function';

    }

    expect( data, path = null ) {

        if ( ! isFunction( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
