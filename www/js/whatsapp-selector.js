 //Guarda os valores
 sessionStorage.setItem('cliente', document.form01.cliente.value);

 sessionStorage.setItem('telefone', document.form01.telefone.value);

 sessionStorage.setItem('email', document.form01.email.value);

 sessionStorage.setItem('endereco', document.form01.endereco.value);
 //console.log(sessionStorage.getItem('cliente'));
 var form = document.querySelector("form");
 var log = document.querySelector("#resRad");

 function carregarDom() {
   
   document.addEventListener("DOMContentLoaded", function (event) {
     console.log("DOM completamente carregado e analisado");
   });

   form.addEventListener("submit", function (event) {
     var adicional = new FormData(form);
     var output = "";
     for (const entry of adicional) {
       output = output + "\r" + entry[0] + ": " + entry[1] + " " + "\r";
     };
     //checado.innerHTML = "Teste";
     resRad.innerText = output;
     var resultado = output; //document.getElementById('resRad'); //.innerText Pegou a saída das escolhas

     event.preventDefault();
     console.log(resultado);

     resultado = resultado.replace(/[ ]/g, '%20');
     document.getElementById("whatsapp-share-btt").href =
       `https://api.whatsapp.com/send?phone=5521971025148&text=${resultado}`;


   }, false);
 }

 carregarDom();





/*var form = document.querySelector("form");
var log = document.querySelector("#resRad");

form.addEventListener("submit", function (event) {
  var adicional = new FormData(form);
  var output = "";

  for (const entry of adicional) {
    output = output + entry[0] + " " + ": " + entry[1] + " " + "\r";
  };
  //checado.innerHTML = "Teste";
  resRad.innerText = output;
  let resultado = document.getElementById('resRad').innerText; // Pegou a saída das escolhas
  console.log(resultado);
  event.preventDefault();

  document.getElementById("whatsapp-share-btt").href =
    "https://api.whatsapp.com/send?phone=5521971025148&text=Esse%20é%20meu%20pedido:%20" + resultado;

}, false);*/