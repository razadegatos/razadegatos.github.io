<?php namespace HashOver;

// Copyright (C) 2010-2019 Jacob Barkdull
// This file is part of HashOver.
//
// I, Jacob Barkdull, hereby release this work into the public domain.
// This applies worldwide. If this is not legally possible, I grant any
// entity the right to use this work for any purpose, without any
// conditions, unless such conditions are required by law.
//
//--------------------
//
// IMPORTANT NOTICE:
//
// To retain your settings and maintain proper functionality, when
// downloading or otherwise upgrading to a new version of HashOver it
// is important that you preserve this file, unless directed otherwise.
//
// It is also important to choose UNIQUE values for the encryption key,
// admin name, and admin password, as not doing so puts HashOver at
// risk of being hijacked. Allowing someone to delete comments and/or
// edit existing comments to post spam, impersonate you or your
// visitors in order to push some sort of agenda/propaganda, to defame
// you or your visitors, or to imply endorsement of some product(s),
// service(s), and/or political ideology.


class Secrets
{
	// REQUIRED SETUP INFORMATION

	// Admin e-mail address to send notifications to
	protected $notificationEmail = 'contacto@razadegatos.info';

	// E-mail address to use in notifications to normal users
	protected $noreplyEmail = 'contacto@razadegatos.info';

	// Unique encryption key (case-sensitive)
	protected $encryptionKey = 'W2%ZEG%5stf2_k?L';

	// Login name to gain admin rights (case-sensitive)
	protected $adminName = 'Admin';

	// Login password to gain admin rights (case-sensitive)
	protected $adminPassword = 'v%F&V_?m8ftKQ9wk';

	// OPTIONAL SQL INFORMATION

	// Type of database, sqlite or mysql
	protected $databaseType = 'mysql';

	// Database name
	protected $databaseName = 'u303281461_comentarios21';

	// SQL database host name
	protected $databaseHost = 'localhost';

	// SQL database port number
	protected $databasePort = '3306';

	// SQL database login user
	protected $databaseUser = 'u303281461_nadieporaca';

	// SQL database login password
	protected $databasePassword = 'X=u&#Yw-2uUn4csV';

	// SQL database character set
	protected $databaseCharset = 'utf8';

	// OPTIONAL SMTP MAILER SETUP

	// SMTP server host name
	protected $smtpHost = 'smtp.hostinger.com';

	// SMTP server port number
	protected $smtpPort = 465;

	// SMTP server encryption method
	protected $smtpCrypto = 'ssl';

	// SMTP server requires login authentication
	protected $smtpAuth = true;

	// SMTP server user
	protected $smtpUser = 'smtp@razadegatos.info';

	// SMTP server password
	protected $smtpPassword = '_wxs&L3--jQ5@7kd';
}
