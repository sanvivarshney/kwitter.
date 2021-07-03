
  var firebaseConfig = {
      apiKey: "AIzaSyD8RFPmukp60hxbvHMOVJF-gx3hKr-YPi0",
      authDomain: "kwitter-27771.firebaseapp.com",
      databaseURL: "https://kwitter-27771-default-rtdb.firebaseio.com",
      projectId: "kwitter-27771",
      storageBucket: "kwitter-27771.appspot.com",
      messagingSenderId: "367636681994",
      appId: "1:367636681994:web:bcb760e980c4cfe50296f3",
      measurementId: "G-J0XMBCDF59"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      document.getElementById("trending_rooms").innerHTML += room_name;

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html";
    }


   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"
  }

  function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}