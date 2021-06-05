require('../database/connection')
const Usuario = require('../models/Usuario')
const Classificacao = require('../models/Classificacao')
const Nps = require('../models/Nps')
const Questao = require('../models/Questao')
const Sugestoes = require('../models/Sugestoes')

let usuario = new Usuario()
usuario.nome = "Vivian Perroni de Oliveira"
usuario.email = "vivian.perroni@hotmail.com"
usuario.senha = "123"



let questao = new Questao()
questao.descricao = "descrevendo"
questao.ativo = 1




usuario.save()

questao.save()
