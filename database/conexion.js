const mysql= require ('mysql')
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'Megadium667.',
    database:'hospital'
})

conexion.connect( function(error){
    if(error){
        console.log(`ocurrio un error en la coexion ${error}`)
        return;
    } else {
        console.log('Conexion exitosa')
    }
})

module.exports = {conexion}