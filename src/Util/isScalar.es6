/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default value => {

    const withSymbol = 'undefined' !== typeof Symbol;
    let type = typeof value;

    return 0 <= [ 'string', 'number', 'boolean' ].indexOf( type ) ||
        withSymbol && 'symbol' === type ||
        null === value ||
        withSymbol && value instanceof Symbol ||
        value instanceof String ||
        value instanceof Number ||
        value instanceof Boolean;

};
