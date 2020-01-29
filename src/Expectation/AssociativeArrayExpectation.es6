/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class AssociativeArrayExpectation extends AbstractExpectation {

    getType() {

        return 'associativeArray';

    }

    expect( data, path = null ) {

        if ( 'undefined' !== typeof data.length && 0 === data.length ) {

            return this;

        }

        // In JS world an associative array is considered any instance Object whose properties do not make up a
        // sequence of positive integers starting at 0. It must also be a direct instance of Object and not any
        // class extending it, in which case it is considered an object instance.
        // Note that NULL is also considered an object in JS for some reason.
        if ( Array.isArray( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        if ( null === data || 'object' !== typeof data ) {

            throw new UnexpectedDataException( data, this, path );

        }

        const keys = Object.keys( data );
        if ( 0 === keys.length ) {

            return this;

        }

        const sorted = keys.sort( ( left, right ) => {

            left = parseInt( left );
            right = parseInt( right );

            if ( isNaN( left ) || isNaN( right ) ) {

                return false;

            }

            return left > right;

        } );

        const range = Array.apply( null, { length: keys.length } ).map( Function.call, Number );
        if ( range.join( ',' ) === sorted.join( ',' ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
