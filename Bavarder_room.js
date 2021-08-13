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

function logout()
{
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location= "index.html";
}

function addName()
{
    user_name = localStorage.getItem("user_name");
    document.getElementById("name").innerHTML = "<h2>Hi " + user_name + " please enter a room name" +"</h2>";
}

function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      window.location = "Bavarder_page.html";
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
      });
  }

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+ Room_names +"</div><hr>";
  //End code
  });});}
  getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Bavarder_page.html";
}
