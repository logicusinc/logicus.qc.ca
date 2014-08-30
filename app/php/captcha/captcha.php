<?php
session_start();
include('captcha-gen.php');
$captcha = new captcha();
$_SESSION['captcha_keystring'] = $captcha->getKeyString();
