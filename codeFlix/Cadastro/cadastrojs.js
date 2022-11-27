var salvarPessoa = document.querySelector("button#salvar")
salvarPessoa.addEventListener("click", salvar)
erros = []

function salvar() {

    if (_validarCadastro()) {

        _efetuarCadastro()

    } else {
        _mostrarErros();
    }
}

function _efetuarCadastro() {
    var nome = document.querySelector('input#nome').value
    var email = document.querySelector('input#email').value
    var telefone = document.querySelector('input#telefone').value
    var user = document.querySelector('input#user').value
    var cpf = document.querySelector('input#cpf').value
    var endereco = document.querySelector('input#endereco').value
    var adm = document.querySelector('input#ADM')
    var prof = document.querySelector('input#PROF')
    var aluno = document.querySelector('input#ALUNO')

    var perfil = '';

    if (adm.checked) {
        perfil = adm.value
    }
    if (prof.checked) {
        perfil = prof.value
    }
    if (aluno.checked) {
        perfil = aluno.value
    }

    _adicionaLinha(nome, email, telefone, user, cpf, endereco, perfil)

    var ul = document.querySelector("#msg-erro");
        ul.innerHTML = "";
}

function _adicionaLinha(nome, email, telefone, user, cpf, endereco, perfil) {
    var tabela = document.querySelector('table');
    var row = tabela.insertRow(tabela.rows.length);

    _adicionaColuna(row, 0, nome)
    _adicionaColuna(row, 1, email)
    _adicionaColuna(row, 2, telefone)
    _adicionaColuna(row, 3, user)
    _adicionaColuna(row, 4, cpf)
    _adicionaColuna(row, 5, endereco)
    _adicionaColuna(row, 6, perfil)
}

function _adicionaColuna(row, posicao, valor) {
    row.insertCell(posicao).innerHTML = valor;
}


function _validarCadastro() {
    erros = []
    var nome = document.querySelector("input#nome")

    if (nome.value.length < 3) {
        erros.push("Digite seu nome completo!")
        console.log("Nome deu error")
    }

    var email = document.querySelector("input#email")

    if (!email.value.includes("@") || !email.value.includes(".com")) {
        erros.push("Digite um e-mail válido!")
    }

    var cpf = document.querySelector("input#cpf")

    if (!_validarCpf(cpf.value)) {
        erros.push("CPF inválido!")
    }

    var user = document.querySelector("input#user")

    if (user.value.length < 4){
        erros.push("Digite um usuário válido!")
    }
    var endereco = document.querySelector("input#endereco")

    if (endereco.value.length < 4){
        erros.push("Digite um endereço válido!")
    }
    var senha = document.querySelector("input#senha")
    var confsenha = document.querySelector("input#confsenha")

    if(senha.value.length < 4 || confsenha.value.length < 4){
        erros.push("Sua senha é muito curta!")
    } else if (senha.value != confsenha.value){
        erros.push("As senhas estão diferentes!")
    }

    
    console.log(erros);

    console.log("fim")
    return erros.length == 0;
}
function _mostrarErros() {
    var ul = document.querySelector("#msg-erro");
    ul.innerHTML = "";

    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function _validarCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}













var dark = document.getElementById("darktheme");

dark.addEventListener("click", function () {
    var conte = document.querySelector(".left > h1");
    conte.style.color = 'rgb(29, 214, 220)'
});
var light = document.getElementById("lighttheme");

light.addEventListener("click", function () {
    var conte = document.querySelector(".left > h1");
    conte.style.color = 'rgb(18, 18, 133)'
});