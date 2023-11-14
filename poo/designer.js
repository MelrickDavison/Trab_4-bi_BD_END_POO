function desenharCards(idContainer, arrayMaterias) {
    let container = document.getElementById(idContainer)
    container.innerHTML = ""
    for (const materia of arrayMaterias) {
        container.innerHTML += `
            <div class="card">
            <img src="./img/${materia.imagem}" alt="" class="avatar">
            <div class="conteudo">${materia.nome}</div>
            <div class="barra-botoes"></div>
        </div>
        `
    }
}