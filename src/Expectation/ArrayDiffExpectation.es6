/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import arrayDiff from '../Util/arrayDiff';

import AbstractExpectation from './AbstractExpectation';
import UnexpectedDataException from './Exception/UnexpectedDataException';

export default class ArrayDiffExpectation extends AbstractExpectation {

    constructor( compare, expectation ) {

        super();

        this.compare = compare;
        this.expectation = expectation;

    }

    getType() {

        return `arrayDiff (\n${ this.indent( JSON.stringify( this.compare ) ) };\n${
            this.indent( this.expectation.getType() ) };\n)`;

    }

    expect( data, path = null ) {

        try {

            this.expectation.expect( arrayDiff( data, this.compare ), path );

        } catch ( e ) {

            throw new UnexpectedDataException( data, this, path, e );

        }

        return this;

    }

}
