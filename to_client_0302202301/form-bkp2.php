<!-- contact@testing.itechsurf.com -->
<?php 
error_reporting(-1);

if(isset($_POST['submit']))
{
$name = $_POST['contact_name']; 
$submit_links = $_POST['contact_message']; 
$from_add = "contact@testing.itechsurf.com"; 
$to_add = "contact@testing.itechsurf.com"; 
$subject = "Your Subject Name";
$message = "Name:$name \n Sites: $submit_links";

$headers = 'From: contact@testing.itechsurf.com' . "\r\n" .

'Reply-To: contact@testing.itechsurf.com' . "\r\n";

if(mail($to_add,$subject,$message,$headers)) 
{
    $msg = "Mail sent";

 echo $msg;
} 

print "<p>Thanks $name</p>" ;
}

// else conditional statement for if(isset($_POST['submit']))
else {
echo "Sorry, you cannot do that from here. Please fill in the form first.";
}

?>
