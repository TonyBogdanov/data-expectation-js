/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import regexFromString from '../Util/regexFromString';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class RegexPatternExpectation extends AbstractExpectation {

    getType() {

        return 'regexPattern';

    }

    expect( data, path = null ) {

        try {

            regexFromString( data );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
