/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isFloat from 'data-types-js/src/is/isFloat';
import isFunction from 'data-types-js/src/is/isFunction';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ValueExpectation extends AbstractExpectation {

    constructor( value ) {

        super();

        this.value = value;

    }

    getType() {

        let expression;

        switch ( true ) {

            case isFloat( this.value ) && ! isFinite( this.value ):
                expression = 'INF';
                break;

            case isFunction( this.value ):
                expression = 'Function';
                break;

            default:
                expression = JSON.stringify( this.value );

        }

        if ( 200 < expression.length ) {

            expression = expression.substr( 0, 200 ) + '...';

        }

        return `value = ${ expression }`;

    }

    expect( data, path = null ) {

        // TODO Use TonyBogdanov/data-comparator-js once implemented.
        if ( JSON.stringify( this.value ) !== JSON.stringify( data ) ) {

            throw new UnexpectedDataException( data, this, path );

        }

        return this;

    }

}
