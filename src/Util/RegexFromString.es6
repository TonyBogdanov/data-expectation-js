/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class RegexFromString {

    static create( pattern ) {

        const match = pattern.match( /^\/(.+?)\/([a-z]*)$/ );
        if ( match ) {

            return new RegExp( match[1], match[2] ? match[2] : '' );

        }

        throw `Invalid regex pattern: ${ pattern }.`;

    }

}
