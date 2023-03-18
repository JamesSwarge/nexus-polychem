<?php
//get data from form  

$name = $_POST['aname'];
$email = $_POST['aemail'];
$phone = $_POST['aphone'];
$company = $_POST['acompany'];
$product = $_POST['aproduct'];
$message= $_POST['arequirement'];

$to = "youremail@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>