/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isEmpty from 'data-types-js/src/is/isEmpty';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class EmptyExpectation extends AbstractExpectation {

    getType() {

        return 'empty';

    }

    expect( data, path = null ) {

        if ( ! isEmpty( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
