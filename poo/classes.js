// class Aluno {
//     constructor(login, nome, senha, nascimento, foto, matricula, pontos) {
//         this.login = login,
//             this.nome = nome,
//             this.senha = senha,
//             this.nascimento = nascimento,
//             this.foto = foto,
//             this.matricula = matricula,
//             this.pontos = pontos
//     }
// }

class Professor {
    constructor(login, nome, senha, nascimento, foto, especializacao, curriculo, siape) {
        this.login = login,
            this.nome = nome,
            this.senha = senha,
            this.nascimento = nascimento,
            this.foto = foto,
            this.especializacao = especializacao,
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

class Materia {
    constructor(id, nome, imagem, descricao) {
            this.id = id,
            this.nome = nome,
            this.imagem = imagem,
            this.descricao = descricao,
            this.atividades = []

    }
    adicionarAtividade(atividade) {
        if (atividade instanceof Atividade) {
            this.atividades.push(atividade)
        }
    }
}


class Comentario {
    constructor(id, criador, conteudo) {
        this.id = id,
            this.criador = criador,
            this.conteudo = conteudo,
            this.data = new Date
    }
}
class Conteudo {
    constructor(id, materia, professor) {
        this.id = id,
            this.materia = materia,
            this.professor = professor
    }
}

class arquivoAula extends Conteudo {
    constructor(id, materia, professor, titulo, video, duracao) {
        super(id, materia, professor),
            this.titulo = titulo,
            this.video = video,
            this.duracao = duracao
        this.comentarios = []
    }
    adicionarComentario(comentario) {
        this.comentarios.push(comentario)
    }
}

class Apostila extends Conteudo {
    constructor(id, materia, professor, titulo, arquivo) {
        super(id, materia, professor),
            this.titulo = titulo,
            this.arquivo = arquivo,
            this.comentarios = []
    }
    adicionarComentario(comentario) {
        this.comentarios.push(comentario)
    }
}

class Atividade {
    constructor(idMateria, titulo, professor, pontos) {
        this.id = idMateria,
            this.titulo = titulo,
            this.professor = professor,
            this.pontos = pontos
    }
    adicionarComentario(comentario) {
        this.comentarios.push(comentario)
    }

}

// class Assunto {
//     constructor(id, nome, materia, descricao) {
//         this.id = id,
//             this.nome = nome,
//             this.materia = materia,
//             this.descricao = descricao,
//             this.atividades = []
//         this.conteudos = []
//     }
//     adicionarMaterias(conteudo) {
//         this.conteudos.push(conteudo)
//     }

//     adicionarAtividades(atividade) {
//         this.atividades.push(atividade)
//     }
// }

