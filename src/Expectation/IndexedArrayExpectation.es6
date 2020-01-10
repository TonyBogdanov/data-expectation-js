/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class IndexedArrayExpectation extends AbstractExpectation {

    getType() {

        return 'indexedArray';

    }

    expect( data, path = null ) {

        if ( 'undefined' !== typeof data.length && 0 === data.length ) {

            return this;

        }

        // In JS world an indexed array is considered any instance of Array or any instance of Object whose properties
        // make up a sequence of positive integers starting at 0. If the data is an object it must be a direct instance
        // of Object and not any class extending it, in which case it is considered an object instance.
        // Note that NULL is also considered an object in JS for some reason.
        if ( Array.isArray( data ) ) {

            return this;

        }

        if ( null === data || 'object' !== typeof data ) {

            throw new UnexpectedDataException( data, this, path );

        }

        const keys = Object.keys( data ).map( key => {

            key = parseInt( key );
            if ( isNaN( key ) ) {

                throw new UnexpectedDataException( data, this, path );

            }

            return key;

        } ).sort( ( left, right ) => left > right );

        const range = Array.apply( null, { length: keys.length } ).map( Function.call, Number );

        if ( range.join( ',' ) !== keys.join( ',' ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
