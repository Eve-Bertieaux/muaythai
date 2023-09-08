 // Fonction pour afficher la confirmation
    function afficherConfirmation() {
        var confirmation = document.getElementById("confirmation");
        confirmation.style.display = "block";

        // Masquer la confirmation après 3 secondes
        setTimeout(function() {
            confirmation.style.display = "none";
        }, 3000); // 3000 millisecondes (3 secondes)
    }

    // Écoutez l'événement de soumission du formulaire
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire
        afficherConfirmation(); // Appeler la fonction d'affichage de la confirmation
    });

    function initMap() {
        // Coordonnées géographiques de l'emplacement que vous souhaitez afficher
        var myLatLng = {lat: 48.8588443, lng: 2.2943506};

        // Création d'une nouvelle carte Google Maps
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 15 // Niveau de zoom initial
        });

        // Marqueur pour indiquer l'emplacement
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Mon emplacement'
        });
    }
