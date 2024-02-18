<?php 
defined( 'ABSPATH' ) || exit;
define( 'SC_OBJECT_CACHE', true );
defined( 'WP_CACHE_KEY_SALT' ) || define( 'WP_CACHE_KEY_SALT', 'U8zbhszpGV' );
include_once( WP_CONTENT_DIR . '/plugins/simple-cache/inc/pre-wp-functions.php' );
$GLOBALS['sc_config'] = sc_load_config();
if ( empty( $GLOBALS['sc_config'] ) || empty( $GLOBALS['sc_config']['enable_in_memory_object_caching'] ) ) { return; }
if ( @file_exists( WP_CONTENT_DIR . '/plugins/simple-cache/inc/dropins/redis-object-cache.php' ) ) { require_once( WP_CONTENT_DIR . '/plugins/simple-cache/inc/dropins/redis-object-cache.php' ); }
