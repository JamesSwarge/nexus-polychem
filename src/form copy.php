<?php

// $a=array();

// if (isset($_POST['submit'])) {
//   if (!empty($_POST['multiproduct'])) {
//     foreach ($_POST['multiproduct'] as $selected) {
//         // echo '<p class="select-tag mt-3">' . $selected . '</p>';
//         array_push($a, $selected);
//       }
//   } else {
//     echo '<p class="error alert alert-danger mt-3">Please select any value</p>';
//   }
// }

//get data from form
$name = $_POST['aname'];
$email = $_POST['aemail'];
$phone2 = $_POST['aphone'];
$phone = $_POST['bphone'];
$company = $_POST['acompany'];
$product = $_POST['aproduct'];
// $product2 = $_POST['multiproduct'];
$message= $_POST['arequirement'];

foreach( $_POST['multiproduct'] as $multiproductvalue ) 
  $prods .= "$multiproductvalue, ";

// $to = "james.swarge.fe@gmail.com, nexuspolychem@gmail.com, info@nexuspolychem.com";
$to = "james.swarge.fe@gmail.com";
// $to = "james.swarge.fe@gmail.com";
$subject = "Enquiry from website";
$txt = "This mail is from Enquiry form \r\n\n Name : ". $name . "\r\n Email : " . $email . "\r\n Contact : " . $phone . "\r\n Company : " . $company . "\r\n Products Selected : " . $prods . "\r\n . "\r\n\r\n Message : \r\n" . $message;
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