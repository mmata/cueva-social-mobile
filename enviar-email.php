<?php

$email = $_REQUEST['email'] ;
$nombre = $_REQUEST['nombre'] ;
$pais = $_REQUEST['pais'] ;
$comentario = $_REQUEST['comentario'] ;

if (empty($email) || empty($comentario)) {
echo "<script type=\"text/javascript\">
alert('Porfavor, escribe tu e-mail y mensaje.');
window.location.replace('index.html');
</script>";
}

else {
mail( "hola@cuevasocial.com", "Comentario",
  $comentario, "From: $email" );
echo "<script type=\"text/javascript\">
alert('Gracias por comunicarte con nosotros :)');
window.location.replace('index.html');
</script>";
}
?>