/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from '../../Util/isObject';

export default class InvalidExpectationDefinitionException {

    constructor( definition ) {

        this.message = `Invalid expectation definition: ${ isObject( definition ) && definition.name ?
            definition.name : typeof definition }.`;

    }

}
