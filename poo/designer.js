function desenharCards(idContainer, arrayMaterias) {
    let container = document.getElementById(idContainer)
    container.innerHTML = ""
    for (const materia of arrayMaterias) {
        container.innerHTML += `
            <div class="card">
            <img src="./img/${materia.imagem}" alt="" class="avatar">
            <a></a>
            <div class="conteudo">${materia.nome}</div>
            <div class="barra-botoes"></div>
        </div>
        `
    }
}
function desenharCards(idContainer, objeto) {
    let container = document.getElementById(idContainer)
    container.innerHTML = ""
        container.innerHTML += `
            <div class="card">
            <img src="./img/${objeto.nome}" alt="" class="avatar">
            <div class="conteudo">${objeto.descricao}</div>
            <div class="conteudo">${objeto.atividades}</div>
        </div>
        `
    
}
