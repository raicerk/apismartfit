//Inyección de dependencias
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

//Configuracion de la API
require('events').EventEmitter.defaultMaxListeners = Infinity;

//Configuración
let config = require('./config')

//Importacion de controladores
let request = require('./controller/request')

//Inicialización de la aplicación
var app = express()

//Configuración de nuestra API
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors())
app.set('port', config.puerto)

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', config.domain)
	res.setHeader('Access-Control-Allow-Methods', 'POST,GET')
	res.setHeader('Content-Type', 'application/json')
	next()
});

//Iniciamos las rutas de nuestro servidor/API
let rutas = express.Router()

//Ruta de bienvenida
rutas.get('/', function(req, res) {
	res.send({
		'Mensaje': 'Bienvenido a la API REST de SmartFit'
	})
})

//Rutas de acceso a la API
rutas.route('/Login/').post(request.Login)

//
app.use(rutas)

// Inicialización del servicio
app.listen(config.puerto, function() {
	console.log(`Node server ejecutandose en http://localhost:${config.puerto}`)
})

