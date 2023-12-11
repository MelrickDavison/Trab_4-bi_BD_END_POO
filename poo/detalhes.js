
function obterParametroDaURL(nomeDoParametro) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeDoParametro);
}
const cardId = obterParametroDaURL('cardId');
var atividadeHTML = '';
function criarDetalhesHTML(materia) {
    let array = materia.atividades
    for (let i = 0; i < array.length; i++) {
        atividadeHTML += `  
             <div class='atividades'>
                <p>Atividades: ${array[i].titulo}</p>
            </div>`
    }
    return `
        <div class='card'>
            <div class="conteudo">
                <h2 class="titulo">${materia.nome}</h2>
                <p class="descricao">${materia.descricao}</p>
             </div>  
        </div>
     
    `;
}

// Use o ID para obter as informações específicas da materia
const materiaSelecionada = listaDeMaterias.find(materia => materia.id === cardId);

// Exemplo: Exiba as informações no container de detalhes
const detalhesContainer = document.getElementById('detalhe');
detalhesContainer.innerHTML = criarDetalhesHTML(materiaSelecionada);
detalhesContainer.innerHTML += atividadeHTML