/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default value => {

    const emptyValues = [ undefined, null, false, 0, '', '0' ];

    for ( let i = 0, l = emptyValues.length; i < l; i++ ) {

        if ( value === emptyValues[ i ] ) {

            return true;

        }

    }

    if ( 'object' === typeof value ) {

        for ( let key in value ) {

            if ( value.hasOwnProperty( key ) ) {

                return false;

            }

        }

        return true;

    }

    return false

};
