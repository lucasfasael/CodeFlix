var button = document.getElementById("action-btn");
var b = false;
button.addEventListener("click", function(){
    var container = document.getElementById("container");

    if(container.style.display === "flex"){
        container.style.display = "none"
    }
    else{
        container.style.display = "flex";
    }
});
var botao = document.querySelector('button')
var dark = document.getElementById("darktheme");

dark.addEventListener("click", function(){
    var conte = document.querySelector("h1")
    conte.style.color = 'rgb(29, 214, 220)'
    botao.style.backgroundColor = 'rgb(29, 214, 220)'
    botao.style.color = 'rgb(18, 18, 133)'
});
var light = document.getElementById("lighttheme");

light.addEventListener("click", function(){
    var conte = document.querySelector("h1")
    conte.style.color = 'rgb(18, 18, 133)'
    botao.style.backgroundColor = 'rgb(18, 18, 133)'
    botao.style.color = 'rgb(29, 214, 220)'
});

