class Professor {
    constructor(login, nome, senha, nascimento, foto, curriculo, siape) {
        this.login = login,
            this.nome = nome,
            this.senha = senha,
            this.nascimento = nascimento,
            this.foto = foto,
            this.curriculo = curriculo,
            this.siape = siape
    }
}
class Turma {
    constructor(id, nome, professor) {
        this.id = id,
            this.nome = nome,
            this.professor = professor,
            this.dataDeCriacao = new Date,
            this.participantes = []
    }

    adicionarAluno(aluno) {
        this.participantes.push(aluno)
    }
}

class Materias {
    constructor(id, nome) {
        this.id = id,
            this.nome = nome
    }
}

class Assuntos {
    constructor(id, nome, materia, descricao) {
        this.id = id,
            this.nome = nome,
            this.materia = materia,
            this.descricao = descricao,
            this.atividades = []
        this.materiais = []
    }
    adicionarMaterias(materiais) {
        this.materiais.push(materiais)
    }

    adicionarAtividades(atividade) {
        this.atividades.push(atividade)
    }
}

class Biologia extends Materias {
    constructor(id, nome,) {
        super(id, nome)
        this.assuntos = []
    }

    adicionarAssunto(assunto) {
        this.assuntos.push(assunto)
    }
}

