function desenharCards(idContainer, arrayMaterias) {
    let container = document.getElementById(idContainer)
    container.innerHTML = ""

    for (const materia of arrayMaterias) {
        console.log(materia)
        container.innerHTML += `
        <div class="card" onclick='carregarDetalhes("${materia.id}")'>
            <img src="./img/${materia.imagem}" alt="" class="avatar">
           
            <div class="conteudo">
              <p>${materia.nome}</p> 
             
             </div>
           
        </div>
        `
    }
}
// function desenharDesc(idContainer, objeto) {
//     console.log(objeto)
//     let container = document.getElementById(idContainer)
//     container.innerHTML = ""
//     container.innerHTML += `
//             <div class="card">
//             <div class="conteudo">
//             <h2>${objeto.nome}</h2>
//             </div>
//             <div class="conteudo">${objeto.descricao}</div>
//             <div class="conteudo">${objeto.atividades}</div>
//         </div>
//         `

// }
