<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "matt@mattlundin.io";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . "-" . "<a href='#contact.html' stye='text-align: center; margin-top: 20%; font-size: 4rem; text-decoration: none;color:#ff00099'>Return</a>";
