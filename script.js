// Funções de acessibilidade

let tamanhoFonte = 100;

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

// Função de alto contraste
function alternarContraste() {
    const pagina = document.body;
    const botao = document.getElementById("botaoContraste");

    pagina.classList.toggle("alto-contraste");

    const contrasteAtivo = pagina.classList.contains("alto-contraste");

    botao.setAttribute("aria-pressed", contrasteAtivo);
}