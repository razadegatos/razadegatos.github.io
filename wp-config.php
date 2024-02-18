<?php

define( 'WP_CACHE', false ); // Added by WP Rocket

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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'razadegatos' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'H+-y?[;B>K`Kn?D(uGvyqab[#y]bHgqFgAsaA#b`(pT~DOCCORS{f&1lr?5vs8PS' );
define( 'SECURE_AUTH_KEY',  'v1DL!pgN_I?MS45|g1bq2Yhf=2G|lUva6<P8?cO4?3u~2/B!@>NSM=P9c20X.0<8' );
define( 'LOGGED_IN_KEY',    '_1=#Re2,t9F1SqplpD<~b_saq(CY@H3Us@|K)ZhY<%-Jw:{[pt#@B51.T*9%t2v>' );
define( 'NONCE_KEY',        'e1><ev1Ia(t x&pu (Sa(6>ET2{=]CJq%TgHR.7z~>r{S+^<:jx$XEmw|Z*TW.]~' );
define( 'AUTH_SALT',        'p&dW_%,]1+c$SQn2J{~j;IYh>FS00!YF`mzv2SC?g.6Z{tw!{Zlr~ dNGc`1bKP6' );
define( 'SECURE_AUTH_SALT', 'H-mEE*JJQv@7Hu}jr^(t|kla)6G(H92p)Q|p<|t=tE!JT $zKi&cHotr);#_S?b>' );
define( 'LOGGED_IN_SALT',   '/2nD&w[a-{x9Nji8Smi8ng+5?$^UHESMy[sC6UP-=[53@jtg9rHMv%%aizGDU )2' );
define( 'NONCE_SALT',       '1(FqO6)EtL&8%dS<mr1i#e8}}Nqs;I$|$=eFLA$7H+B+?kJW`DD[F/e|[JDfU7<9' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
