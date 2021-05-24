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
classificacao.like = "27"
classificacao.created_at = "05-05"
classificacao.updated_at = "22-05"
classificacao.questao_id = "54545466"

let nps = new Nps()
nps.pontuacao = "100"
nps.created_at = "05-06"
nps.updated_at = "21-06"

let questao = new Questao()
questao.descricao = "descrevendo"
questao.ativo = "515151"
questao.created_at = "05-07"
questao.updated_at = "20-07"

let sugestoes = new Sugestoes()
sugestoes.descricao = "descrevendo"
sugestoes.created_at = "05-08"
sugestoes.updated_at = "19-08"
sugestoes.nps_id = "1515"

usuario.save()
classificacao.save()
nps.save()
questao.save()
sugestoes.save()