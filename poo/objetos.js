let professor1 = new Professor('dhs.lima', 'David', 'david1314', '1990-09-13', '', 'Mestrado', '', '19000')
let turma1 = new Turma(1, "Biologia", professor1)
console.log(turma1);
let materia1 = new Materia("Bio2", "Biologia", "dna.png")
let materia2 = new Materia("Hist2", "Historia", "history.png")
let materia3 = new Materia("Mat2", "Matematica", "abacus.png")
let materia4 = new Materia("Eng2", "English", 'USA.png')
let materia5 = new Materia("Por2", "Portugues", "abc.png")
let assunto1 = new Assunto("bio22", "Reino Fungi", "Biologia", "Iremos aprender o basico sobre sobre o reino fungi.");
let assunto2 = new Assunto("bio22", "Reino Plantae", "Biologia", "Iremos aprender o basico sobre sobre o reino das plantas.");

materia1.adicionarAssuntos(assunto1)
materia1.adicionarAssuntos(assunto2)
console.log(materia1)

let listaDeMaterias = []

listaDeMaterias.push(materia1, materia2, materia3, materia4, materia5)