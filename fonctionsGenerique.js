function creation_objet_xml_http_request() {
    var resultat = null;
    try {
        resultat = new XMLHttpRequest();
    } catch (error) {
        try {
            resultat = new ActiveXObject("Msxlm2.XMLHTTP");
        } catch (error) {
            try {
                resultat = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                resultat = null;
            }
        }
    }
    return resultat;
}