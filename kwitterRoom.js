
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

  userName = localStorage.getItem(""); /* Armazenar o valor do localStorage "userName" dentro da variável */

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function () /* Adicione a função addRoom */
{
  roomName = document.getElementById("").value; /* Armazenar o nome da sala "roomName" dentro da variável */

  firebase.database().ref("/").child().update /* Adicionar o nome da sala no firebase. */
  ({ 
    purpose : " " /* Adicione o valor "adicionar nome de sala" para a chave purpose. */
  });

    localStorage.setItem("", roomName); /* Adicionar o nome da sala no localStorage. */
    
    window.location = ""; /* redirecionar para a tela kwitterPage.html */
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) /* Explicação: as linhas 25, 26, 27 e 28 obtém todos os dados do firebase para conter os nomes das salas.*/
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
                = childKey; /* Adicionar a variável roomNames que contém todos os nomes das salas vindas do firebase. */

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; /* Explicação: O row(fileira) é uma variável que define a área de texto dentro da coluna do console, pois para cada navegador pode ser diferente, então o row padroniza. */
      /* Importante: O redirectToRoomName é uma função para que quando o nome da sala for pressionado, entraremos naquela sala.*/

      document.getElementById("").innerHTML += row; /* Chamar o id output */
      /* Importante: Se apenas escrevermos "=" apenas o nome da sala será exibido. No entanto, quando temos muitos nomes
        de salas, e queremos exibir todos dentro de um único elemento HTML, utilizamos "+="" e em seguida escrevemos a variável row para enfileirar. */
    });
  });

}

getData();

function (name) /* Adicionar a função redirectToRoomName  */
{
  console.log(name); 
  localStorage.setItem("", name); /* Adicione o roomName (nome da sala) ao localStorage. */
    window.location = ""; /* redirecionar para a tela kwitterPage.html */
}

function () /* Adicione a função logout para saírmos da sala. */
{
localStorage.removeItem(""); /* Adicione o userName para ser removido */
localStorage.removeItem(""); /* Adicione o roomName para ser removido */
    window.location = ""; /* redirecionar para a tela index.html */
}
