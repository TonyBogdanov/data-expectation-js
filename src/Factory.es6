/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isObject from './Util/isObject';

import InvalidExpectationNameException from './Expectation/Exception/InvalidExpectationNameException';
import InvalidExpectationDefinitionException from './Expectation/Exception/InvalidExpectationDefinitionException';

import AndExpectation from './Expectation/AndExpectation';
import ArrayDiffExpectation from './Expectation/ArrayDiffExpectation';
import ArrayIntersectExpectation from './Expectation/ArrayIntersectExpectation';
import EmptyExpectation from './Expectation/EmptyExpectation';
import IntegerExpectation from './Expectation/IntegerExpectation';
import StringExpectation from './Expectation/StringExpectation';
import ValueExpectation from './Expectation/ValueExpectation';
import NotExpectation from './Expectation/NotExpectation';
import ScalarExpectation from './Expectation/ScalarExpectation';
import StringLengthExpectation from './Expectation/StringLengthExpectation';
import ArrayExpectation from './Expectation/ArrayExpectation';
import ListExpectation from './Expectation/ListExpectation';
import ArrayKeysExpectation from './Expectation/ArrayKeysExpectation';
import EnumExpectation from './Expectation/EnumExpectation';
import BooleanExpectation from './Expectation/BooleanExpectation';
import OrExpectation from './Expectation/OrExpectation';
import GreaterThanExpectation from './Expectation/GreaterThanExpectation';
import GreaterThanOrEqualExpectation from './Expectation/GreaterThanOrEqualExpectation';
import LowerThanExpectation from './Expectation/LowerThanExpectation';
import LowerThanOrEqualExpectation from './Expectation/LowerThanOrEqualExpectation';
import AbstractExpectation from './Expectation/AbstractExpectation';
import RegexMatchExpectation from './Expectation/RegexMatchExpectation';
import RegexPatternExpectation from './Expectation/RegexPatternExpectation';
import IndexedArrayExpectation from './Expectation/IndexedArrayExpectation';
import AssociativeArrayExpectation from './Expectation/AssociativeArrayExpectation';
import CountExpectation from './Expectation/CountExpectation';
import MapExpectation from './Expectation/MapExpectation';

class Factory {

    static register( expectation ) {

        Factory.map[ expectation.name ] = expectation;

    }

    static resolve( name ) {

        return Factory.map.hasOwnProperty( name ) ? Factory.map[ name ] : null;

    }

    static filterDefinition( data ) {

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

                    result[ key ] = Factory.filterDefinition( data[ key ] );
                    return result;

                }, {} );

            }

            if ( Array.isArray( data ) ) {

                return data.map( Factory.filterDefinition );

            }

            return data;

        }

        const expectation = Factory.resolve( data.expectationName );
        if ( ! expectation ) {

            throw new InvalidExpectationNameException( data.expectationName );

        }

        return new expectation( ...data.expectationArguments.map( Factory.filterDefinition ) );

    }

    static fromDefinition( data ) {

        let expectation = Factory.filterDefinition( data );
        if ( ! ( expectation instanceof AbstractExpectation ) ) {

            throw new InvalidExpectationDefinitionException( data );

        }

        return expectation;

    }

}

Factory.map = {

    AndExpectation: AndExpectation,
    ArrayDiffExpectation: ArrayDiffExpectation,
    ArrayIntersectExpectation: ArrayIntersectExpectation,
    EmptyExpectation: EmptyExpectation,
    IntegerExpectation: IntegerExpectation,
    StringExpectation: StringExpectation,
    ValueExpectation: ValueExpectation,
    NotExpectation: NotExpectation,
    ScalarExpectation: ScalarExpectation,
    StringLengthExpectation: StringLengthExpectation,
    ArrayExpectation: ArrayExpectation,
    IndexedArrayExpectation: IndexedArrayExpectation,
    AssociativeArrayExpectation: AssociativeArrayExpectation,
    ListExpectation: ListExpectation,
    ArrayKeysExpectation: ArrayKeysExpectation,
    EnumExpectation: EnumExpectation,
    BooleanExpectation: BooleanExpectation,
    OrExpectation: OrExpectation,
    GreaterThanExpectation: GreaterThanExpectation,
    GreaterThanOrEqualExpectation: GreaterThanOrEqualExpectation,
    LowerThanExpectation: LowerThanExpectation,
    LowerThanOrEqualExpectation: LowerThanOrEqualExpectation,
    RegexMatchExpectation: RegexMatchExpectation,
    RegexPatternExpectation: RegexPatternExpectation,
    CountExpectation: CountExpectation,
    MapExpectation: MapExpectation,

};

export default Factory;
