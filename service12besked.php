<?php
    $email=$_REQUEST['email'];
    $navn=$_REQUEST['navn'];
    $telnr=$_REQUEST['telnr'];
    $emne=$_REQUEST['emne'];
    $besked=nl2br("<p style='font-family: sans-serif; font-size:18px; color:black'>".$_REQUEST['besked']."\r\n"."fra: "."\r\n".$navn."\r\n".$telnr."\r\n".$email."</p>");

    $til="lene_frkjr@yahoo.dk";
    $fra="lenefroekjaer@lenefroekjaer.dk";

    mail($til, $emne, $besked, "Content-type:text/html; charset=utf-8\r\nfrom: $fra");
    header("location: tak.html");
?>