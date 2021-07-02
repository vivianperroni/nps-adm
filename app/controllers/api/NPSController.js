const Nps = require('../../models/Nps')
class NpsController {
    static async register(req,res){
        let pontuacao = req.body.pontuacao
        let nps = new Nps()
        nps.pontuacao = pontuacao
        try{
            await nps.save() 
            res.status(201)
            res.json({message:"Pontuação registrada com sucesso!"})
        }catch(error){
            res.status(500)
            res.json({message:"Houve um erro ao registrar a pontuaçao"})
        }
    }
}


module.exports = NpsController