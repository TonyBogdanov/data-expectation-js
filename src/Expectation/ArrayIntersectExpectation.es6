/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import ArrayIntersect from '../Util/ArrayIntersect';
import CircularDependency from '../Util/CircularDependency';

export default class ArrayIntersectExpectation extends AbstractExpectation {

    constructor( compare, expectation ) {

        super();

        this.compare = compare;
        this.expectation = expectation;

    }

    getType() {

        return CircularDependency.detect( this, () => `arrayIntersect (\n${
            this.indent( JSON.stringify( this.compare ) ) };\n${ this.indent( this.expectation.getType() ) };\n)`,
            '<circular>' );

    }

    expect( data, path = null ) {

        try {

            this.expectation.expect( ArrayIntersect.intersect( data, this.compare ), path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
