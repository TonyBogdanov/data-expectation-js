/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from 'data-types-js/src/is/isObject';

export default class InvalidExpectationDefinitionException {

    constructor( definition ) {

        if ( isObject( definition ) && definition.name ) {

            definition = definition.name;

        } else {

            definition = `(${ typeof definition }) ${ JSON.stringify( definition ) }`;

        }

        this.message = `Invalid expectation definition: ${ definition }.`;

    }

}
