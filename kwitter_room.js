
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBeAqTSHxt6J_Mm1llYr-lm-H7ara7MVDQ",
      authDomain: "kwitter-311b7.firebaseapp.com",
      projectId: "kwitter-311b7",
      storageBucket: "kwitter-311b7.appspot.com",
      messagingSenderId: "762990168920",
      appId: "1:762990168920:web:b05568ea58375583a0f32d",
      measurementId: "G-WSWX2SYBKF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

