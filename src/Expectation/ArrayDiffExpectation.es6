/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';
import ArrayDiff from '../Util/ArrayDiff';
import CircularDependency from '../Util/CircularDependency';

export default class ArrayDiffExpectation extends AbstractExpectation {

    constructor( compare, expectation ) {

        super();

        this.compare = compare;
        this.expectation = expectation;

    }

    getType() {

        return CircularDependency.detect( this, () => `arrayDiff (\n${
            this.indent( JSON.stringify( this.compare ) ) };\n${ this.indent( this.expectation.getType() ) };\n)`,
            '<circular>' );

    }

    expect( data, path = null ) {

        try {

            this.expectation.expect( ArrayDiff.diff( data, this.compare ), path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
