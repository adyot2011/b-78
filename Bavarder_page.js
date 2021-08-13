 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDho0kYC5tYRpwnqMamLuUYisBYqGXhtvI",
    authDomain: "bavarder-adyot2011.firebaseapp.com",
    databaseURL: "https://bavarder-adyot2011-default-rtdb.firebaseio.com",
    projectId: "bavarder-adyot2011",
    storageBucket: "bavarder-adyot2011.appspot.com",
    messagingSenderId: "402741395409",
    appId: "1:402741395409:web:d16b399cf349e55796aaf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem(room_name);
    window.location= "Bavarder_room.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name : user_name,
         message:msg,
         like:0   
      });
      document.getElementById("msg").value = "";
}

