/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import CircularDependency from '../Util/CircularDependency';

export default class NotExpectation extends AbstractExpectation {

    constructor( expectation ) {

        super();

        this.expectation = expectation;

    }

    getType() {

        return CircularDependency.detect( this, () => `not ( ${ this.expectation.getType() } )`, '<circular>' );

    }

    expect( data, path = null ) {

        try {

            this.expectation.expect( data, path );

        } catch ( e ) {

            return this;

        }

        throw new UnexpectedDataException( data, this, path );

    }

}
