<?php

$recepient = "Avtokoleso121@gmail.com";
$sitename = "BH SENS";

$car = trim($_POST["car"]);
$addInfo = trim($_POST["addInfo"]);
$phone = trim($_POST["phone"]);
$feedback = trim($_POST["feedback"]);
$message = "Машина: $car \nДополнительная информация: $addInfo \nТелефон: $phone \nОбратная связь: $feedback";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
