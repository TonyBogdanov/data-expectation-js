/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import StringExpectation from '../Expectation/StringExpectation';
import ValueExpectation from '../Expectation/ValueExpectation';
import EmptyExpectation from '../Expectation/EmptyExpectation';
import IntegerExpectation from '../Expectation/IntegerExpectation';
import NotExpectation from '../Expectation/NotExpectation';
import ScalarExpectation from '../Expectation/ScalarExpectation';
import StringLengthExpectation from '../Expectation/StringLengthExpectation';
import AndExpectation from '../Expectation/AndExpectation';
import ArrayDiffExpectation from '../Expectation/ArrayDiffExpectation';
import ArrayExpectation from '../Expectation/ArrayExpectation';
import ArrayIntersectExpectation from '../Expectation/ArrayIntersectExpectation';

export default name => {

    const classMap = {

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

    };

    return classMap.hasOwnProperty( name ) ? classMap[ name ] : null;

};
