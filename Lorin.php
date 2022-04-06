<?php
$name = $_POST['name'];
$idade = $_POST['idade'];

$arquivo = fopen('Lorinhoxff_domina.txt', 'w');
fwrite($arquivo, '
Olá meu name e lorinhoxff eu estou dentro do seu armazenamento interno...

 instagram ----> @lorinhoxff
');
fclose($arquivo);

echo  $name;
echo $idade;
?>