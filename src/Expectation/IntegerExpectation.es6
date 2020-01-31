/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import isInteger from 'data-types-js/src/is/isInteger';

export default class IntegerExpectation extends AbstractExpectation {

    getType() {

        return 'integer';

    }

    expect( data, path = null ) {

        if ( ! isInteger( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
