let professor1 = new Professor('dhs.lima', 'David', 'david1314', '1990-09-13', '', 'Mestrado', '', '19000')
let turma1 = new Turma(1, "Biologia", professor1)
let materia1 = new Materia("Bio2", "Biologia", "dna.png", " Aprenda tudo sobre o ser humano e o universo onde ele vive ")
let materia2 = new Materia("Hist2", "Historia", "history.png", " Estude o passado para não errar no futuro")
let materia3 = new Materia("Mat2", "Matematica", "abacus.png", "Tudo sobre números e suas tecnologias")
let materia4 = new Materia("Eng2", "English", 'USA.png', "Vire fluente na língua mais falada do mundo")
let materia5 = new Materia("Por2", "Portugues", "abc.png", "Portugues e suas tecnologias")

let atividade1 = new Atividade("Bio2", "Reino Fungi", materia1, professor1, "2")
let atividade2 = new Atividade("Hist", "Colonização", materia2, professor1, "2")
let atividade3 = new Atividade("Mat2", "Análise Combinatória", materia3, professor1, "2")
let atividade4 = new Atividade("Eng", "Modal Verbs", materia4, professor1, "2")
let atividade5 = new Atividade("Por2", "Conjugação Verbal", materia5, professor1, "2")

materia1.adicionarAtividade(atividade1)
materia2.adicionarAtividade(atividade2)
materia3.adicionarAtividade(atividade3)
materia4.adicionarAtividade(atividade4)
materia5.adicionarAtividade(atividade5)

let listaDeMaterias = []
listaDeMaterias.push(materia1, materia2, materia3, materia4, materia5)