/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ArrayExpectation extends AbstractExpectation {

    getType() {

        return 'array';

    }

    expect( data, path = null ) {

        // In JS world an indexed array is represented as Array, but an associative array is actually any Object
        // (which Array is also an instance of), as long as it's a direct instance of it and not of any other class,
        // in which case it is actually considered an object instance.
        // Note that NULL is also considered an object in JS for some reason.
        if (

            null === data ||
            'object' !== typeof data ||
            ( ! Array.isArray( data ) && 'Object' !== Object.getPrototypeOf( data ).constructor.name )

        ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
