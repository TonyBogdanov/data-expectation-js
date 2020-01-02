/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class RegexMatchExpectation extends AbstractExpectation {

    constructor( pattern ) {

        super();

        if ( 'string' === typeof pattern ) {

            const match = pattern.match( /^\/(.+?)\/([a-z]*)$/ );
            if ( match ) {

                pattern = new RegExp( match[1], match[2] ? match[2] : '' );

            } else {

                pattern = new RegExp( pattern );

            }

        }

        this.pattern = pattern;

    }

    getType() {

        return `regexMatch = ${ this.pattern }`;

    }

    expect( data, path = null ) {

        if ( ! data.match( this.pattern ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
