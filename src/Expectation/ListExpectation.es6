/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import CircularDependency from '../Util/CircularDependency';

export default class ListExpectation extends AbstractExpectation {

    constructor( expectation ) {

        super();

        this.expectation = expectation;

    }

    getType() {

        return CircularDependency.detect( this, () => `list ( ${ this.expectation.getType() } )`, '<circular>' );

    }

    expect( data, path = null ) {

        for ( const key in data ) {

            if ( ! data.hasOwnProperty( key ) ) {

                continue;

            }

            try {

                this.expectation.expect( data[ key ], path ? `${ path }.${ key }` : null );

            } catch ( e ) {

                throw new UnexpectedDataException( data, this, path, e );

            }

        }

        return this;

    }

}
