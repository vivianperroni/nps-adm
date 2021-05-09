module.exports = {
    dialect:'postgres', // define o  SGDB a ser utilizado
    host:'localhost',
    username:'vivian', // nome de usuário padrão no postgres
    password:'vpo',
    database:'nps',
    define:{
        timestamps:true,
				/* define a nomenclatura com separação de palavaras por (_) underline*/
				underscored: true, 
    }
}
