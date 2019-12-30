/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class AbstractExpectation {

    indent( data ) {

        return data.replace( /^(.*)$/gm, '    $1' );

    }

}
