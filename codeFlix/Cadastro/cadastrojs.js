var salvarPessoa = document.querySelector("button#salvar")

salvarPessoa.addEventListener("click",salvar)

function salvar(){
    //var nome = document.querySelector("input#nome")
        //console.log("queijo")
    salvarPessoa.style.color = "red"
}

















var dark = document.getElementById("darktheme");

dark.addEventListener("click", function(){
    var conte = document.querySelector(".left > h1");
    conte.style.color = 'rgb(29, 214, 220)'
});
var light = document.getElementById("lighttheme");

light.addEventListener("click", function(){
    var conte = document.querySelector(".left > h1");
    conte.style.color = 'rgb(18, 18, 133)'
});