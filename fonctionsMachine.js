function jouer() {


    document.getElementById('nom').style.backgroundImage = "white";
    var nom = document.getElementById('nom').value;

    if (nom == "") {
        document.getElementById('nom').style.backgroundColor = "red";
        alert("Attention : vous devez saisir votre nom avant de jouer");
        return null;
    }

    var temps = new Date().getTime();

    var parametres = "nom=" + codeContenu("nom") + "&anticache=" + temps;

    objet_xml_http_request = creation_objet_xml_http_request();

    objet_xml_http_request.open('get', 'gainAleatoire.php?' + parametres, true);

    objet_xml_http_request.onreadystatechange = actualiserPage;

    document.getElementById('button').disabled = true;
    document.getElementById('charge').style.visibility = "visible";

    objet_xml_http_request.send(null);
}