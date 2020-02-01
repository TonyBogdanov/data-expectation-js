/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class ArrayIntersect {

    static intersect( left, right ) {

        return left.filter( value => -1 !== right.indexOf( value ) );

    }

}
