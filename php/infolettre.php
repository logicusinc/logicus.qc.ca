<?php
session_start();

$to_email   = strip_cr_lf( 'info@logicus.qc.ca' );
$from_email = strip_cr_lf( $_POST['courrielinfo'] );

// Here we get all the information from the fields sent over by the form.

$headers = "From: " . $from_email .">\r\n";
$headers .= "Reply-To: " . $from_email . "\r\n";
$headers .= "Return-path: " . $from_email . "";

$subject = "Logicus - Inscription infolettre";
$message = 'Email: '.$from_email;
 
if(isset($_SESSION['captcha_keystring']) && strtolower($_SESSION['captcha_keystring']) != strtolower($_POST['captchainfo']))
{
	echo "3";
}
else
{
	 if ( ! is_vaguely_email_looking($from_email) ) 
	 {
	  echo "0"; // adresse invalide
	 }
	 else 
	 {
		  if ( mail($to_email, $subject, $message, $headers) ) 
		  {
		     echo "1"; // success message
		  }

		  // sending mail failed
		  else 
		  {
		    echo "2"; // erreur lors de l'envoie
		  }
	 }
 }


     /** Sanitize a string for use in an e-mail header. Prevents email injection attacks. @param string $str @return string the input will all occurances of carriage return ('\r') and new-line ('\n') removed. */
 function strip_cr_lf($str) {
      return str_replace("\r", '', str_replace("\n", '', $str));
 }


     /** Check if a string looks like an email address. This is not perfect, its not even good but at least it will filter out wildly inacurate stuff. */
 function is_vaguely_email_looking($str) {
      return preg_match( '/^[^@]+\@[^@]+.[^@.]+$/', $str);
 }

?>