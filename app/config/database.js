module.exports = {
    dialect:process.env.DB_DIALECT, // define o  SGDB a ser utilizado
    host:process.env.DB_HOST,
    username:process.env.DB_USER, // nome de usuário padrão no postgres
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    define:{
        timestamps:true,
		/* define a nomenclatura com separação de palavaras por (_) underline*/
		underscored: true, 
    }
}
