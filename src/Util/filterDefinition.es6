/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from './isObject';
import factory from './factory';

import InvalidExpectationNameException from '../Expectation/Exception/InvalidExpectationNameException';
import AbstractExpectation from '../Expectation/AbstractExpectation';

function filterDefinition( data ) {

    if ( data instanceof AbstractExpectation ) {

        return data;

    }

    if (

        ! isObject( data ) || 2 !== Object.values( data ).length ||
        'string' !== typeof data['expectationName'] ||
        'object' !== typeof data['expectationArguments'] || ! Array.isArray( data['expectationArguments'] )

    ) {

        if ( isObject( data ) ) {

            return Object.keys( data ).reduce( ( result, key ) => {

                result[ key ] = filterDefinition( data[ key ] );
                return result;

            }, {} );

        }

        if ( Array.isArray( data ) ) {

            return data.map( filterDefinition );

        }

        return data;

    }

    const expectation = factory( data.expectationName );
    if ( ! expectation ) {

        throw new InvalidExpectationNameException( data.expectationName );

    }

    return new expectation( ...data.expectationArguments.map( filterDefinition ) );

}

export default filterDefinition;
