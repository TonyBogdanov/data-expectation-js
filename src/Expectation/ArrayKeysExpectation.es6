/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import arrayKeys from '../Util/arrayKeys';
import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ArrayKeysExpectation extends AbstractExpectation {

    constructor( expectation, sort = false ) {

        super();

        this.expectation = expectation;
        this.sort = sort;

    }

    getType() {

        return `arrayKeys ( ${ this.expectation.getType() } )`;

    }

    expect( data, path = null ) {

        try {

            let keys = arrayKeys( data );
            if ( this.sort ) {

                keys = keys.sort();

            }

            this.expectation.expect( keys, path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
