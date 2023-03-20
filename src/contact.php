<?php

//get data from form
$name = $_POST['contact_name'];
$email = $_POST['contact_email'];
$phone2 = $_POST['contact_phone'];
$phone = $_POST['cphone'];
$company = $_POST['contact_company'];
$message= $_POST['contact_message'];

$to = "james.swarge.fe@gmail.com, nexuspolychem@gmail.com, info@nexuspolychem.com";
// $to = "james.swarge.fe@gmail.com";
$subject = "Enquiry from website";
$txt = "This mail is from Contact form \r\n\n Name : ". $name . "\r\n Email : " . $email . "\r\n Contact : " . $phone . "\r\n Company : " . $company . "\r\n\r\n Message : \r\n" . $message;
$mailheader = "From:".$name."<".$email.">\r\n";
if($email!=NULL){
  mail($to,$subject,$txt,$mailheader);
}
//redirect
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  header("Location:thankyou.html");
  exit("form submitted");
}


?>