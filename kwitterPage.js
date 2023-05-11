const firebaseConfig = {
  apiKey: "AIzaSyDxN1qlMK_XGxL7niEeuYgVGEay8Sp4Tdk",
  authDomain: "teste-43.firebaseapp.com",
  databaseURL: "https://teste-43-default-rtdb.firebaseio.com",
  projectId: "teste-43",
  storageBucket: "teste-43.appspot.com",
  messagingSenderId: "1080328193641",
  appId: "1:1080328193641:web:2f9e881cbd397ef3aa84f8"
};
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName"); 
roomName = localStorage.getItem("roomName"); 

function send() 
{
  msg = document.getElementById("msg").value; 
  firebase.database().ref(roomName).push({
    name:userName, 
    message:msg, 
    like:0  
   });

  document.getElementById("msg").value = ""; /* Explicação: o valor da input box das mensagens fica vazio, para que novas mensagens sejam escritas. */
}



function getData() 
          { firebase.database().ref("/"+roomName).on('value', function(snapshot) 
            { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
               { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
              {
          firebaseMessageId = childKey; 
          messageData = childData; 
//Início do código
          console.log(firebaseMessageId); 
          console.log(messageData); 

          nome = messageData['name']; 
          message = messageData['message'];
          like = messageData['like']; 

          nameWithTag = "<h4> "+ nome +"<img class='user_tick' src='tick.png'></h4>";
          messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
          spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = nameWithTag + messageWithTag + like_button + spanWithTag ; 
        document.getElementById("output").innerHTML += row; 


      } });  }); }
getData();

function updateLike(messageId) /* Importante: o messageId é a identificação única da mensagem no banco de dados. */
{
  console.log("botão de like pressionado - " + messageId);
	buttonId = messageId; 
	likes = document.getElementById(buttonId).value; 
	updatedLikes = Number(likes) + 1 ; 
	console.log(updatedLikes); 

	firebase.database().ref(roomName).child(messageId).update({ 
		like : updatedLikes  
	 });

}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location.replace("index.html");
}