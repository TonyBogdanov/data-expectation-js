/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import ArrayKeys from '../Util/ArrayKeys';
import CircularDependency from '../Util/CircularDependency';

export default class ArrayKeysExpectation extends AbstractExpectation {

    constructor( expectation, sort = false ) {

        super();

        this.expectation = expectation;
        this.sort = sort;

    }

    getType() {

        return CircularDependency.detect( this, () => `arrayKeys ( ${ this.expectation.getType() } )`, '<circular>' );

    }

    expect( data, path = null ) {

        try {

            let keys = ArrayKeys.keys( data );
            if ( this.sort ) {

                keys = keys.sort();

            }

            this.expectation.expect( keys, path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
