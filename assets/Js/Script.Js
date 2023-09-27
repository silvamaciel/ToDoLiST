
var novoItem = document.getElementById("newItem");
var tarefasPendentes = document.querySelector(".tarefasPendentes");
var tarefasConcluidas = document.querySelector(".tarefasConcluidas");

function checarConteudo() {
    var conteudo = novoItem.value.trim();

    if (conteudo === "") {
        alert("Digite algo!");
    } else {
        var novaTarefa = criarTarefa(conteudo);
        tarefasPendentes.appendChild(novaTarefa);
        novoItem.value = "";
    }
}

function criarTarefa(conteudo) {
    var div = document.createElement("div");
    div.className = "item";
    div.textContent = conteudo;

    var botaoExcluir = document.createElement("button");
    botaoExcluir.className = "excluir";
    botaoExcluir.textContent = "Excluir";

    var botaoConcluido = document.createElement("button");
    botaoConcluido.className = "concluido";
    botaoConcluido.textContent = "Feito";

    div.appendChild(botaoConcluido);
    div.appendChild(botaoExcluir);

    botaoConcluido.addEventListener("click", function () {
        tarefasConcluidas.appendChild(div);
        div.removeChild(botaoConcluido);
    });

    botaoExcluir.addEventListener("click", function () {
        div.parentNode.removeChild(div);
    });

    return div;
}


