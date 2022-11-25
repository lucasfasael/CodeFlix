var salvarPessoa = document.querySelector("button#salvar")
salvarPessoa.addEventListener("click",salvar)



function salvar(){
    
    erros = validarCadastro()

    if(erros.length > 0)
    {
        //chama funcao pra inserir no ID de erros
        //returna
    }
    //se nao, adiciona na tabela com o append
    salvarPessoa.style.color = "red"
}

function validarCadastro()
{
    erros = []
    var aux = [];
    var nome = document.querySelector("input#nome")

    if(nome.value.length < 3)
    {
        erros.push("Digite seu nome completo!")
    }

    var email = document.querySelector("input#email")

    if(!email.value.includes("@")|| !email.value.includes(".com"))
    {
        erros.push("Digite um e-mail válido!")
    }



    console.log("fim")
    return erros;
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