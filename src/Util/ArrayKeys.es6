/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class ArrayKeys {

    static keys( data ) {

        return Object.keys( data ).map( key => key === parseInt( key ).toString() ? parseInt( key ) : key );

    }

}
