<?php
# BEGIN WP Cache by 10Web

define( 'TWO_PLUGIN_DIR_CACHE', '/home/u966590352/domains/ensolarusa.com/public_html/rp/wp-content/plugins/tenweb-speed-optimizer/' );
# END WP Cache by 10Web
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
define( 'DB_NAME', 'u966590352_Y3hZS' );

/** Database username */
define( 'DB_USER', 'u966590352_NCiEP' );

/** Database password */
define( 'DB_PASSWORD', 'WOjfEZPZNb' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

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
define( 'AUTH_KEY',          '|e_2Vi_11eaY1;H9m-FD|OVAfJ92LkNq7`<?!(hW%bj%P,[R!:K.h+[2`jCBzCJ1' );
define( 'SECURE_AUTH_KEY',   'FYwG.RV/0))*SDlD8s:,In|IX]A0#(}/h#h2`T(`$hD2ku{aQhSUy=)7#jrOIazC' );
define( 'LOGGED_IN_KEY',     '<hJD ?&%;{Dk~WHN%8n+DW.R5nk+/`$:NRH;3TL3)OPXe^Dzt*5s?FWsbk~^,0(_' );
define( 'NONCE_KEY',         'Ulby;FWt;:N4B1h-[qSA+6W2CxP1p62%f{}`6p%G+! [Z|)G<@jp/RM=2jDQZVIz' );
define( 'AUTH_SALT',         '(A:j{}5+8e:g/pH~VkAh-~*w|h_:)j*mQ3<&?y|MLZ^BK3565K<op3@W=[(yA#=J' );
define( 'SECURE_AUTH_SALT',  '=r%6I]7#I_3 MFnw6CS2Ff`cOr6*8h_ZO)lpu5~^h[nes!y-*N*N55.^@Hz6R:sN' );
define( 'LOGGED_IN_SALT',    '?Bx<{r(n Rj-sv)?EL}psbg%Ev=5fZEB4;f^xqK|BY+ne9r=trw!<9ST;*lfmdqJ' );
define( 'NONCE_SALT',        'mI=XF.EDA;QS_@|[KQU-o}56L|~@f(Dd:|hyiv3_#U|=[r]@gySc.Bz^%K;b8j0v' );
define( 'WP_CACHE_KEY_SALT', 'VW%=[-&-349+;XIiS3Wt?UX7}Z]wvivsWtCvrJKGXi&T.-g$Zf+p2gW8wUCtS{Mc' );


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
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
