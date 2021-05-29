const Questao = require('../models/Questao')
class QuestaoController {
    static index(req,res){
    }
    static create(req,res){
        res.render('questao/create')
    }
    static async store(req,res){
        let descricao = req.body.descricao
        let ativo = true

        let questao = new Questao()
        questao.descricao = descricao
        questao.ativo = ativo
        await questao.save()
        res.redirect('/questao')
    }
    static edit(req,res){
    }
    static update(req,res){
    }
    static destroy(req,res){
    }        
}

module.exports = QuestaoController