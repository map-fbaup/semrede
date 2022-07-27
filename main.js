// JAVASCRIPT FILE 

// verificar se JS está conectado
console.log ('on');

// HEADER  _____________________________________________________
/*function displayHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras").style.display = "none";
}*/


function displayHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sobre sem rede / Sur sans réseau";*/

    document.getElementById("home-btn").style.display = "none";
    document.getElementById("sobre-btn").style.display = "block";

    
    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayInfo() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "block";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";


    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayArtistas() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";


    document.getElementById("artistas").style.display = "block";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayMapa() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";


    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "block";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayObrasMuseu() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";

    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "block";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayObrasP1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";


    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "block";
    document.getElementById("obras-cozinha").style.display = "none";
}

function displayObrasCozinha() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sobre").style.display = "none";

    /*document.getElementById("sobre-btn").innerHTML = "Sem Rede / Sans Réseau";*/

    document.getElementById("home-btn").style.display = "block";
    document.getElementById("sobre-btn").style.display = "none";


    document.getElementById("artistas").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("obras-museu").style.display = "none";
    document.getElementById("obras-p1").style.display = "none";
    document.getElementById("obras-cozinha").style.display = "block";
}


/* CHANGE COLOR ON LOAD 
var color =["red", "yellow", "blue"];
var i=0;
function bg (){
    document.body.style.background = color[2];

}*/


/* BACK TO TOP */
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
