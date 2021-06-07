require('../database/connection')
const Usuario = require('../models/Usuario')
const Questao = require('../models/Questao')

let usuario = new Usuario()
usuario.nome = "Vivian Perroni de Oliveira"
usuario.email = "vivian.perroni@hotmail.com"
usuario.senha = "123"

let questao = new Questao()
questao.descricao = "descrevendo"
questao.ativo = 1

usuario.save()
questao.save()

