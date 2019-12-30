/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from '../../Util/isObject';

export default class UnexpectedDataException {

    format( data ) {

        if ( isObject( data ) ) {

            return data.name;

        }

        return typeof data;

    }

    constructor( data, expectation, path = null, previous = null ) {

        this.expectation = expectation;
        this.expected = expectation.getType();
        this.actual = this.format( data );
        this.at = path;

        this.message = `Unexpected data: ${ this.actual }, expected:\n${ this.expected }`;
        this.message = this.at ? `\nat: ${ this.at }.` : `${ this.message }.`;

        this.previous = previous;

    }

}
