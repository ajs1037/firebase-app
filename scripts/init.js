document.addEventListener('DOMContentLoaded', function() {
    console.log("Initialize Firebase");
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCw5zXc1MWieLXW4dIibkLN5SCAGu8Qe9M",
        authDomain: "cloud-application-174ce.firebaseapp.com",
        databaseURL: "https://cloud-application-174ce.firebaseio.com",
        projectId: "cloud-application-174ce",
        storageBucket: "cloud-application-174ce.appspot.com",
        messagingSenderId: "373883835285"
    };
    firebase.initializeApp(config);
}, false);
