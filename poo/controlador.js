function carregarmaterias(arrayMaterias) {
    desenharCards("container-cards", arrayMaterias)
}

carregarmaterias(listaDeMaterias)

function carregarDetalhes(materiaId) {
    location.href = `descricao.html?cardId=${materiaId}`;
}