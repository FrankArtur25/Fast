<?php
    try {
        $name = $_REQUEST["name"];
        $email = $_REQUEST["email"];
        $city = $_REQUEST["city"];
        $mobile = $_REQUEST["phone"];
        $profession = $_REQUEST['profession'];
        $message_client = $_REQUEST["message"];
        $subject = "Necesito información";

        $message = "Nombre : ".$name."\n";
        $message.= "Correo : ".$email."\n";
        $message.= "Profesión : ".$profession."\n";
        $message.= "Ciudad : ".$city."\n";
        $message.= "Celular : ".$mobile."\n";
        $message .= "Mensaje : ".$message_client;
        $myemail = "oportunidad@katiracompany.com";
        $headers = "From: $email";
        mail($myemail, $subject, $message, $headers);
        echo true;
    } catch (Exception $e) {
        echo $e;
    }
?>