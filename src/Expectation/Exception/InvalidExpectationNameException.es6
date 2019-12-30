/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class InvalidExpectationNameException {

    constructor( name ) {

        this.message = `Invalid or unsupported expectation name: ${ name }.`;

    }

}
