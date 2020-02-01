/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class CircularDependency {

    static stack = [];

    static detect( reference, callback, fallback ) {

        if ( -1 < this.stack.indexOf( reference ) ) {

            return fallback;

        }

        this.stack.push( reference );
        const result = callback();

        this.stack.pop();
        return result;

    }

}
