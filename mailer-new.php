<?php

    // Get the form fields, removes html tags and whitespace.
    $imie = strip_tags(trim($_POST["imie"]));
    $imie = str_replace(array("\r","\n"),array(" "," "),$imie);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $wiadomosc = trim($_POST["wiadomosc"]);

    // Check the data.
    if (empty($imie) OR empty($wiadomosc) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.domekugmyza.pl/index.php?success=-1#kontakt");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "<jaroslaw.gmyz@gmail.com>";

    // Set the email subject.
    $subject = "ZAPYTANIE O DOMEK $imie";

    // Build the email content.
    $email_content = "Imię: $imie\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Wiadomość:\n$wiadomosc\n";

    // Build the email headers.
    $email_headers = "From: $imie <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);

    // Redirect to the index.html page with success code
    header("Location: http://www.domekugmyza.pl/index.php?success=1#kontakt");

?>
