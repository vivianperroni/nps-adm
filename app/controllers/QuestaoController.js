const Questao = require('../models/Questao')
class QuestaoController {
    static async index(req,res){
        let questoes = await Questao.findAll({attributes:['id','descricao','ativo']}) 
        res.render('questao/index',{questoes})
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
        Questao.findByPK(id)
    }
    static async update(req,res){
        let descricao = req.body.descricao
        let ativo = true

        Questao.findByPK(id)

        questao.descricao = descricao
		questao.ativo = ativo
		await questao.save()
    }
    static async destroy(req,res){
        let id = req.params.id
        let questao = await Questao.findByPK(id)
        await questao.destroy()
        res.redirect('/questao/')
    }        
}

module.exports = QuestaoController