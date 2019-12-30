/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from './isObject';

import ScalarExpectation from '../Expectation/ScalarExpectation';
import StringExpectation from '../Expectation/StringExpectation';
import StringLengthExpectation from '../Expectation/StringLengthExpectation';
import ValueExpectation from '../Expectation/ValueExpectation';

const map = [

    ScalarExpectation,
    StringExpectation,
    StringLengthExpectation,
    ValueExpectation,

];

function transform( data ) {

    if (

        ! isObject( data ) ||
        'string' !== typeof data._expectation ||
        'object' !== typeof data.args ||
        ! Array.isArray( data.args )

    ) {

        return data;

    }

    const matched = map.filter( expectation => expectation.name === data._expectation );
    if ( 1 !== matched.length ) {

        throw new Error( `Invalid or unsupported expectation name: ${ data._expectation }.` );

    }

    return new matched[0]( ...data.args.map( transform ) );

}

export default definition => {

    if ( 'string' !== typeof definition._expectation ) {

        throw new Error( `Invalid expectation definition: ${ JSON.stringify( definition ) }.` );

    }

    return transform( definition );

};
