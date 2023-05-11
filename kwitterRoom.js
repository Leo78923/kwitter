
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

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() 
{
  roomName = document.getElementById("roomName").value; 

  firebase.database().ref("/").child(roomName).update 
  ({ 
    purpose : "adicionar nome de sala" 
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html"; 
}

function getData() 
  {  firebase.database().ref("/").on('value', function(snapshot) /* Explicação: as linhas 25, 26, 27 e 28 obtém todos os dados do firebase para conter os nomes das salas.*/
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
               roomName = childKey; 

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; /* Explicação: O row(fileira) é uma variável que define a área de texto dentro da coluna do console, pois para cada navegador pode ser diferente, então o row padroniza. */
      /* Importante: O redirectToRoomName é uma função para que quando o nome da sala for pressionado, entraremos naquela sala.*/

      document.getElementById("output").innerHTML += row; 
      /* Importante: Se apenas escrevermos "=" apenas o nome da sala será exibido. No entanto, quando temos muitos nomes
        de salas, e queremos exibir todos dentro de um único elemento HTML, utilizamos "+="" e em seguida escrevemos a variável row para enfileirar. */
    });
  });

}

getData();

function redirectToRoomName(name) 
{
  console.log(name); 
  localStorage.setItem("roomName", name); 
    window.location = "kwitterPage.html";
}

function logout()
{
localStorage.removeItem("userName");
localStorage.removeItem("roomName"); 
    window.location = "index.html"; 
}
