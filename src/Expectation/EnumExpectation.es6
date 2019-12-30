/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class EnumExpectation extends AbstractExpectation {

    constructor( options ) {

        super();

        this.options = options;

    }


    getType() {

        return `enum (\n${ this.options.map( option => `${ this.indent( JSON.stringify( option ) ) };\n` ) })`;

    }

    expect( data, path = null ) {

        if ( -1 === this.options.indexOf( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
