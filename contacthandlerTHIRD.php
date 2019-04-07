<?php

    if (isset($_POST['talentsubmit'])) {
        
        $talentfirstname = $_POST['talentfirstname'];

        $talentlastname = $_POST['talentlastname'];
        
        $talentbirthday = $_POST['talentbirthday'];
        
        $talentbirthtime = $_POST['talentbirthtime'];

        $talentbirthplace = $_POST['talentbirthplace'];
        
        $talentmailFrom = $_POST['talentmail'];
        
        $talentphonenumber = $_POST['talentphonenumber'];
        
        $talentsocialmedia = $_POST['talentsocialmedia'];
        
        $talentmessage = $_POST['talentmessage'];

        $talentMailTo = "sashawhite@brain-fucker.com";

        $talentHeaders = "From: ".$talentmailFrom;

        $talentTxt = "You have received a private talent submission from ".$talentfirstname.".\n\n".$talentmessage;

        mail($talentMailTo, $talentTxt, $talentHeaders);

        header("Location: index.html?mailsend");

    }

?>