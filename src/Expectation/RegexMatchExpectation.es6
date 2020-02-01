/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import RegexFromString from '../Util/RegexFromString';

export default class RegexMatchExpectation extends AbstractExpectation {

    constructor( pattern ) {

        super();

        this.pattern = pattern.toString();

    }

    getType() {

        return `regexMatch = ${ this.pattern }`;

    }

    expect( data, path = null ) {

        // RegExp object causes problem when serializing, so we use only store the un-parsed string pattern instead.
        if ( ! data.match( RegexFromString.create( this.pattern ) ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
