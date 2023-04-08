<?php

//get data from form
$name = $_POST['aname'];
$email = $_POST['aemail'];
$phone2 = $_POST['aphone'];
$phone = $_POST['bphone'];
$company = $_POST['acompany'];
$message= $_POST['arequirement'];

foreach( $_POST['multiproduct'] as $multiproductvalue ) 
  $prods .= "$multiproductvalue, ";

$to = "james.swarge.fe@gmail.com, nexuspolychem@gmail.com, info@nexuspolychem.com";
// $to = "james.swarge.fe@gmail.com";
$subject = "Enquiry from website";
$txt = "This mail is from Enquiry form \r\n\n Name : ". $name . "\r\n Email : " . $email . "\r\n Contact : " . $phone . "\r\n Company : " . $company . "\r\n\r\n Products Selected : " . $prods . "\r\n\r\n Message : \r\n" . $message;
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