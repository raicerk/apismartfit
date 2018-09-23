//const request = require('request-promise')
const login = require('../provider/login')

exports.Login = async function (req, res) {

    login.login(req.body.rut, req.body.contrasena).then(response=>{
        if(response){
            res.status(200).json({
                exito : response
            })
        }else{
            res.status(200).json({
                exito: false
            })
        }
    })

    
}