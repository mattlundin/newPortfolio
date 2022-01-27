<<<<<<< HEAD
<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "matt@mattlundin.io";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . "-" . "<a href='#home'>Return</a>";
?>
=======
>>>>>>> fb3e194c8d9c1d91f39457d23732fdf19541f87d
