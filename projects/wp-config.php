<?php

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

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'u966590352_projects' );


/** Database username */

define( 'DB_USER', 'u966590352_uprojects' );


/** Database password */

define( 'DB_PASSWORD', 'Jarabacoa0517$' );


/** Database hostname */

define( 'DB_HOST', 'localhost' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


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

define( 'AUTH_KEY',         'f@-p4=V9_]}8F`Mo^w?$K8LtZ)_U<57=}4`MA/bM6bX>}EG%aaQ{M?[:I60sG]:k' );

define( 'SECURE_AUTH_KEY',  'C{_zobO2+Q(pd*:#gvYDk|E-=H[9g1=`stY,OY/8F2WuKOX}K_*]y-..XT>Yj&x[' );

define( 'LOGGED_IN_KEY',    'oWtP6:9Jgst*>p&:(0K>YH/XV7[}2R&0Curr@@bs!Fq@uJAFTZ1wr;$OCHF|(fu ' );

define( 'NONCE_KEY',        'c4I+I U#]gs|(:k1qi9:Aa{{U<8D}%NM ]D,HM2t,.H8a(i}K61p5]MJ]/#qJ*i.' );

define( 'AUTH_SALT',        'E!a[axk0ZaRf:nQ-M1lK;uOe]uxqreDf)jb90tj#=E#l[PNT 15KY|&$9ypR6Qx@' );

define( 'SECURE_AUTH_SALT', 'Xg=0*8Kn^P+ymp<.M)=YHBF1X moLTrFftI/xgTN#oY,tZgGc;#2?>l|/ZyF+h1#' );

define( 'LOGGED_IN_SALT',   'B_~FsRe#F=e_+Sx^$$&@.t>b3e&%4VB39AbfWP$zl-1XgT<|PWUrp&|k>:XB/mW}' );

define( 'NONCE_SALT',       '(#wTevz@RBCu#_gDfXn}cwE!q-`WTfrjc3]df.^E%XXg[SF_S.4I}?@<i~&(tw^H' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'enso_';


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




define( 'FS_METHOD', 'direct' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

