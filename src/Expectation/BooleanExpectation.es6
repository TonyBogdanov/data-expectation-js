/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class BooleanExpectation extends AbstractExpectation {

    getType() {

        return 'boolean';

    }

    expect( data, path = null ) {

        if ( 'boolean' !== typeof data ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
