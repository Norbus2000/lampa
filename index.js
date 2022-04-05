window.addEventListener("load", init)
var auto;
var lampa;
var piros;
var sarga;
var zold;
var ido;

function ID (elem) {
    return document.getElementById(elem);
}

function $ (elem) {
    return document.querySelectorAll(elem);
}

function init () {
    var ido=setInterval(function () {
        lampa();
    },1200);
}


function lampa () {


  

    var auto=$(".auto")[0];
    var lampa = $(".lampa")[0];
    var piros= $(".piros")[0];
    var sarga= $(".sarga")[0];
    var zold= $(".zold")[0];

    zold.style.opacity=1;
    setTimeout(function () {
        zold.style.opacity="0.3";
        piros.style.opacity="0.3";
        sarga.style.opacity="1";
    },500);
 
    setTimeout(function () {
        zold.style.opacity="0.3";
        piros.style.opacity="1";
        sarga.style.opacity="0.3";
    },700);
 
    setTimeout(function () {
        zold.style.opacity="1";
        piros.style.opacity="0.3";
        sarga.style.opacity="0.3";
    },1200);


    


}
 

 
