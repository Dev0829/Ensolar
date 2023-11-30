<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
if ( file_exists(ABSPATH . "wp-content/advanced-headers.php") ) { 
	require_once ABSPATH . "wp-content/advanced-headers.php";
}

# BEGIN WP Cache by 10Web
define( 'WP_CACHE', true ); // Added by WP Rocket
define( 'TWO_PLUGIN_DIR_CACHE', '/home/u966590352/domains/ensolarusa.com/public_html/wp-content/plugins/tenweb-speed-optimizer/' );
# END WP Cache by 10Web
// Added by WP Rocket




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
define( 'DB_NAME', "u966590352_ensolarusa" );

/** Database username */
define( 'DB_USER', "u966590352_ensolarusa" );

/** Database password */
define( 'DB_PASSWORD', "Jarabacoa0517\$" );

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
define( 'AUTH_KEY',          '7nad5gM$r4?Ld(:u 8<KVn&D]9^]X~!kSsGA%ip>3=2tJqFlMsNe@+]2=5b{,vnm' );
define( 'SECURE_AUTH_KEY',   '^wH}ANWFdOx.@z2XudB7RL;[wqeCHzH`!:9`[|)/R2yC0Q|^u;.rJg?B`#wY`{:8' );
define( 'LOGGED_IN_KEY',     'U&L6@6?r&@J;: 4:38NG2Zh}L` U@a5yn)vM-(-9xww6x2%W }2EW#5NM+.m/-T=' );
define( 'NONCE_KEY',         'y42&il/CbJu|g?;UG7nkfOppXP)#k]bmSBV!^7wM8JeXVbJ/e,yI/6mByxf(SFTD' );
define( 'AUTH_SALT',         'S|mXXP,*kV`[}P9hCFJru[U~hTHY3zY{@pP.:hY#Ux[psSH6&-nS[8;*bU^a<0R^' );
define( 'SECURE_AUTH_SALT',  'CN3KY767{l]V+[%8}9N(Uf#<$:aEn4R7UJBs~9j4e#5v Y- kMnE<]Rqo%Y%]Zi;' );
define( 'LOGGED_IN_SALT',    'WCJfGl1_vft7:<.^PeQj2X=Z$<B3DbEC*Z>VOlX P{sz*r6/}:m!jQ}ZX!1)NTT*' );
define( 'NONCE_SALT',        '^b_miCKT@8<tX#`ggoZjYzEL3VOE}vz<2)O!P8Y?N}Z@Yxh(Y(d8a;C<9fD_tuH.' );
define( 'WP_CACHE_KEY_SALT', 'C^=/~oO}]|1=/IY]<&e%k&HnWJ~+jx$YY!K)`j<{KzzxY-**Q0 g%1.T:6:S@$*7' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'FS_METHOD', 'direct' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
