var salvarCurso = document.querySelector("button#salvar")
salvarCurso.addEventListener("click", salvar)
var form = document.querySelector('form')
erros = []

function salvar() {

    if (_validarCadastro()) {

        _efetuarCadastro()
        form.reset()
    } else {
        _mostrarErros();
    }
    location.href = '#tb'
}

function _efetuarCadastro() {
    var titulo = document.querySelector('input#titulo').value
    var ling = document.querySelector('select#ling').value
    var dificuldade = document.querySelector('select#dificuldade').value
    var qtdVideo =  document.querySelector('input#qtdVideo').value
    var horas = document.querySelector('input#horas').value
    var ferramenta = document.querySelector('input#ferramenta').value
    var auxiliar = document.querySelector('input#auxiliar').value
    var msg = document.querySelector('textarea#msg').value
    var sim = document.querySelector('input#sim')
    var nao = document.querySelector('input#nao')
    var yes = document.querySelector('input#yes')
    var no = document.querySelector('input#no')
    
    var cert = '';
    var grat = '';

    if (sim.checked) {
        cert = sim.value
    }
    if (nao.checked) {
        cert = nao.value
    }
    if (yes.checked) {
        grat = yes.value
    }
    if (no.checked) {
        grat = no.value
    }

    _adicionaLinha(titulo, ling, dificuldade, qtdVideo, horas, ferramenta, auxiliar, cert, grat, msg)

    var ul = document.querySelector("#msg-erro");
        ul.innerHTML = "";
}

function _adicionaLinha(titulo, ling, dificuldade, qtdVideo, horas, ferramenta, auxiliar, cert, grat, msg) {
    var tabela = document.querySelector('table');
    var row = tabela.insertRow(tabela.rows.length);

    _adicionaColuna(row, 0, titulo)
    _adicionaColuna(row, 1, ling)
    _adicionaColuna(row, 2, dificuldade)
    _adicionaColuna(row, 3, qtdVideo)
    _adicionaColuna(row, 4, horas)
    _adicionaColuna(row, 5, ferramenta)
    _adicionaColuna(row, 6, auxiliar)
    _adicionaColuna(row, 7, cert)
    _adicionaColuna(row, 8, grat)
    _adicionaColuna(row, 9, msg)
}

function _adicionaColuna(row, posicao, valor) {
    row.insertCell(posicao).innerHTML = valor;
}


function _validarCadastro() {
    erros = []
    var titulo = document.querySelector("input#titulo")

    if (titulo.value.length < 3) {
        erros.push("Seu t??tulo ?? muito curto!")
    }

    var qtdVideo = document.querySelector("input#qtdVideo")

    if (qtdVideo.value < 0) {
        erros.push("A quantidade de aulas n??o pode ser negativa!")
    }else if(qtdVideo.value.length == 0){
        erros.push("A quantidade de videoaula ?? obrigat??ria!")
    }else if(qtdVideo.value < 10){
        erros.push("A quantidade de videoaulas n??o pode ser menor que 10!")
    }
    var horas = document.querySelector("input#horas")

    if (horas.value < 0) {
        erros.push("A quantidade de horas n??o pode ser negativa!")
    }else if(horas.value.length == 0){
        erros.push("A quantidade de horas ?? obrigat??ria!")
    }else if(horas.value < 10){
        erros.push("A quantidade de horas n??o pode ser menor que 10!")
    }

    var ferramenta = document.querySelector("input#ferramenta")

    if (ferramenta.value.length == 0){
        erros.push("O campo de ferramenta n??o pode ficar em branco!")
    }
    var auxiliar = document.querySelector("input#auxiliar")

    if (auxiliar.value.length == 0){
        erros.push("A recomenda????o de curso n??o pode ficar em branco!")
    }

    var msg = document.querySelector("textarea#msg")

    if (msg.value.length == 0){
        erros.push("Digite uma descri????o para o seu curso!")
    }

    
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

// DARK THEME E LIGHT THEME
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