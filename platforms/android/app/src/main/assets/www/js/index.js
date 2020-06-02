/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


function carregarDom() {
    //Guarda os valores
    sessionStorage.setItem('cliente', document.form01.cliente.value);

    sessionStorage.setItem('telefone', document.form01.telefone.value);

    sessionStorage.setItem('email', document.form01.email.value);

    sessionStorage.setItem('endereco', document.form01.endereco.value);
    //console.log(sessionStorage.getItem('cliente'));
    var form = document.querySelector("form");
    var log = document.querySelector("#resRad");



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
        var resultado =
            output; //document.getElementById('resRad'); //.innerText Pegou a saída das escolhas

        event.preventDefault();
        console.log(resultado);

        resultado = resultado.replace(/[ ]/g, '%20');
        document.getElementById("whatsapp-share-btt").href =
            `https://api.whatsapp.com/send?phone=5521971025148&text=${resultado}`;


    }, false);
}

carregarDom();