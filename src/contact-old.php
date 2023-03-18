<?php

// if($_SERVER['REQUEST_METHOD'] == 'POST') {
//   exit("form submitted");
// }

//get data from form
$name = $_POST['contact_name'];
$phone= $_POST['contact_mobile'];
$message= $_POST['contact_message'];
$to = "suyash@nexuspolychem.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" . "CC: james.swarge.fe@gmail.com" . "\r\n" . "Bcc: contact@testing.itechsurf.com" . "\r\n";
if($phone!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  exit("form submitted");
  header("Location:thankyou.html");
}


?>