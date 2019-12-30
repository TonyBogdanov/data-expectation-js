/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isScalar from '../Util/isScalar';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ScalarExpectation extends AbstractExpectation {

    getType() {

        return 'scalar';

    }

    expect( data, path = null ) {

        if ( ! isScalar( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
