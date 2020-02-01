/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import CircularDependency from '../Util/CircularDependency';

export default class MapExpectation extends AbstractExpectation {

    constructor( expectations ) {

        super();

        this.expectations = expectations;

    }

    getType() {

        return CircularDependency.detect( this, () => `map {\n${ Object.keys( this.expectations ).map( key => {
            
            return this.indent( `${ key } = ${ this.expectations[ key ].getType() };` )
            
        } ).join( `\n` ) }\n}`, '<circular>' );

    }

    expect( data, path = null ) {

        for ( const key in this.expectations ) {

            if ( ! this.expectations.hasOwnProperty( key ) ) {

                continue;

            }

            try {

                this.expectations[ key ].expect( data[ key ], path ? `${ path }.${ key }` : null );

            } catch ( e ) {

                throw new UnexpectedDataException( data, this, path, e );

            }

        }

        return this;

    }

}
