/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractExpectation from './AbstractExpectation';

export default class AnythingExpectation extends AbstractExpectation {

    getType() {

        return 'anything';

    }

    expect( data, path = null ) {

        return this;

    }

}
