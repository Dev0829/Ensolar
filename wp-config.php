<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
// define('FORCE_SSL', false);
// define( 'FORCE_SSL_ADMIN', false ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
// define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

//define( 'ITSEC_ENCRYPTION_KEY', 'UT8qRjpDMV5AK0koZk4pSzdFTXxJTDZKNmokTy8pUElMYDooOG4seSVqVn15eDhWWHJhLTJKMT4/I0VkRl9gIw==' );

//define( 'WP_CACHE', true );

//Begin Really Simple SSL session cookie settings
// @ini_set('session.cookie_httponly', true);
// @ini_set('session.cookie_secure', true);
// @ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
// if ( file_exists(ABSPATH . "wp-content/advanced-headers.php") ) { 
// 	require_once ABSPATH . "wp-content/advanced-headers.php";
// }


/**
     * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "wp_ensolardev" );

/** Database username */
define( 'DB_USER', "root" );

/** Database password */
define( 'DB_PASSWORD', "" );

/** Database hostname */
define( 'DB_HOST', "localhost" );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ']a71RB.0Cc[Cy+]HV(CoQ&S{CZKe|>X:Y4V_a%?dZTA$v;^%o_>AoC49&]7l1pko' );
define( 'SECURE_AUTH_KEY',   'roqi}4%(Bhc+-Q#t%AX>S9yED>2RT4(2Cw3&#-[iseK; Tf2i1S3LAeuWrDxv+Ut' );
define( 'LOGGED_IN_KEY',     'o=;hke1$#v~g@0OCD;#% hU>y,[F&f P.6>>n(L]*Sl0R^aO~2--17A7yblmedE ' );
define( 'NONCE_KEY',         'wh5fKaRs`^bWH)^T+/*.WhLScj/1&i^GDM@f~27F:Az+vSg+CvAt#3@CZ<5WW012' );
define( 'AUTH_SALT',         ',)F*gSlK;k3Ni!M!YWA+d>lXD-tJl<`TD|q[huff]vSeR@CH:IAP*i?y..a=Rg8*' );
define( 'SECURE_AUTH_SALT',  ':i/xf~1<6p.l >vsM<g+:R!u53|/iJ(Q&<b~t0-[J&jeL7k*vpK^(YRggxQ]1-*0' );
define( 'LOGGED_IN_SALT',    '<@&u#*GJ(a>cnoAsskS+`qN:Y5zc)gnX_DOJo9jdy=0v8~}#IYk>-s>pv*pZ.u$~' );
define( 'NONCE_SALT',        '%FBuM1}IgU,]B1WgejE(4e;%+<{>-uhc_&OTYo8I<tKlaIfZYV$$7O$mYaf?4&)!' );
//define( 'WP_CACHE_KEY_SALT', 'Sj yxH7n`h9:E6qY9,tzO+^N4>BS3m_>%+R#D HYA@{M vSXaqT3wGCJB|2pC;)o' );
//define( 'APCU_ENABLED', true );
//define( 'WP_MEMORY_LIMIT', '1024M' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'u2rSk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );


/* Add any custom values between this line and the "stop editing" line. */



// define( 'FS_METHOD', 'direct' );
// define( 'WP_AUTO_UPDATE_CORE', 'minor' );
// define( 'DUPLICATOR_AUTH_KEY', ']-ex<!tu|sr#`hBObhDCrRvGZ~|zzEi}`[E0700(}j!CF!ktKyj]0~@ut=`Z6ky3' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
