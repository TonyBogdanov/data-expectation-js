/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require( 'path' );

require( '@babel/register' )( {

    include: [

        path.resolve( __dirname, 'src' ),
        path.resolve( __dirname, 'tests' ),
        path.resolve( __dirname, 'node_modules/data-types-js/src' ),

    ],

    ignore: [],

    presets: [ '@babel/preset-env' ],

    plugins: [

        [ '@babel/plugin-transform-runtime', { regenerator: true } ],

    ],

} );
