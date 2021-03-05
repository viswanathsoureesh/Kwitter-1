var firebaseConfig = {
      apiKey: "AIzaSyBIhJO1k_4xN0Gb_wHSKMJfm2W2fL8_pZM",
      authDomain: "kwitter-286fd.firebaseapp.com",
      databaseURL: "https://kwitter-286fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-286fd",
      storageBucket: "kwitter-286fd.appspot.com",
      messagingSenderId: "843260747500",
      appId: "1:843260747500:web:bcdebef05ad5a6c8d1cfc9",
      measurementId: "G-2E9DT1YH1R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
