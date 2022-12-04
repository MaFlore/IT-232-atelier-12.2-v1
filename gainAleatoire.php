<?php
header("Content-Type: text/xml; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");
sleep(2);
if(isset($_REQUEST['nom']))
{ 
    $nom = $_REQUEST['nom'];
}
else
{
    $nom = "inconnu";
}


$gain = rand(0,100);

$resultat = '<?xml version="1.0" encoding="utf-8"?>';
$resultat.= "<joueur><nom>".$nom."</nom><gain>".$gain."</gain></joueur>";

echo $resultat;

?>