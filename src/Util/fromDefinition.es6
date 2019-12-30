/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import filterDefinition from './filterDefinition';

import InvalidExpectationDefinitionException from '../Expectation/Exception/InvalidExpectationDefinitionException';
import AbstractExpectation from '../Expectation/AbstractExpectation';

function fromDefinition( definition ) {

    let expectation = filterDefinition( definition );
    if ( ! ( expectation instanceof AbstractExpectation ) ) {

        throw new InvalidExpectationDefinitionException( definition );

    }

    return expectation;

}

export default filterDefinition;
