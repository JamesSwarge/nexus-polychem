<!-- <?php 
if(isset($_POST['submit'])){
    $to = "contact@testing.itechsurf.com";
    $from = $_POST['email'];
    $anything_name = $_POST['anything_name'];
    $anything_mobile = $_POST['anything_mobile'];
    $anything_requirement = $_POST['anything_requirement'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $anything_name . " " . $anything_mobile . " wrote the following:" . "\n\n" . $anything_requirement;
    $message2 = "Here is a copy of your message " . $anything_name . "\n\n" . $anything_requirement;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent. Thank you " . $anything_name . ", we will contact you shortly.";
    You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?> -->

<!-- contact@testing.itechsurf.com -->
<?php 
error_reporting(-1);

if(isset($_POST['submit']))
{
$name = $_POST['name']; 
$submit_links = $_POST['submit_links']; 
$from_add = "submit@webdesignrepo.com"; 
$to_add = "ben@webdesignrepo.com"; 
$subject = "Your Subject Name";
$message = "Name:$name \n Sites: $submit_links";

$headers = 'From: submit@webdesignrepo.com' . "\r\n" .

'Reply-To: ben@webdesignrepo.com' . "\r\n";

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
