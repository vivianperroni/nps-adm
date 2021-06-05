require('./database/connection')
const express = require ('express')
const app = express()
const router = require('./routes/web')

app.use(router)
//Servir arquivos estáticos No express. 
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
// configuração do template engine a ser utilizado na aplicação
app.set('view engine','ejs')
// configuração do diretório da pasta views
app.set('views','./app/views')

// Rota para iniciar a aplicação
app.get('/',(req,res)=>{
    res.render('index')
})
module.exports = app