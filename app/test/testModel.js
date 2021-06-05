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

let classificacao = new Classificacao()
classificacao.like = 1
classificacao.created_at 
classificacao.updated_at 
classificacao.questao_id

let nps = new Nps()
nps.pontuacao = "100"
nps.created_at 
nps.updated_at

let questao = new Questao()
questao.descricao = "descrevendo"
questao.ativo = 1
questao.created_at
questao.updated_at 

let sugestoes = new Sugestoes()
sugestoes.descricao = "descrevendo"
sugestoes.created_at
sugestoes.updated_at
sugestoes.nps_id

usuario.save()
classificacao.save()
nps.save()
questao.save()
sugestoes.save()