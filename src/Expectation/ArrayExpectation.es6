/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ArrayExpectation extends AbstractExpectation {

    getType() {

        return 'array';

    }

    expect( data, path = null ) {

        if ( ! Array.isArray( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
