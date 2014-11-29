<?php
	header('Content-type: text/plain; charset=utf-8');
	
	$to      = 'ceo@nosenseproduction.com';
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers = 'From: ' . $_POST['senderMail'] . "\r\n" .
		'Content-type: text/plain; charset=utf-8' . "\r\n" .
		'Reply-To: ' . $_POST['senderMail'] . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers)) {
		echo 'Your message was sent successfully!\nWe will contact you as soon as possible';
	}
	else {
		echo 'Message was not sent! Try again';
	}
?>