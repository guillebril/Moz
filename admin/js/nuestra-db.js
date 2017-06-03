// function mostrarDatos(){
    var ref = firebase.database().ref("restaurantes/");
    var restaurantesKeys = [],
        restaurantesNames = [];

    ref.orderByChild("restaurantes").on("child_added", function(snapshot) {
        restaurantesKeys.push(snapshot.key);
        restaurantesNames.push(snapshot.val().name);

    }, function(error) {
        console.log("Error: " + error.code);
    });