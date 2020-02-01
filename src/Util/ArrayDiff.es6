/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class ArrayDiff {

    static diff( left, right ) {

        const unique = left.slice();

        right.map( item => {

            if ( unique.indexOf( item ) > -1 ) {

                delete unique[ unique.indexOf( item ) ];

            } else {

                unique.push( item );

            }

        } );

        return unique.filter( x => x !== null );

    }

}
