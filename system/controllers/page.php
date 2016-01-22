<?php

namespace Tourizm\Controller;

if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Page controller
 */
class Page extends Core {
	public function __construct() {
		parent::__construct();
	}

	public function home() {
		$this->to_tpl['variable'] = "var";
		$this->template = "home";
	}

}
