const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
const cors = require('cors')
const app = express();
const port = 3000;
//importações
const Campeonato = require('./controllers/campeonatoController.js');
const Estadio = require('./controllers/estadioController.js');
const Jogador = require('./controllers/jogadorController.js');
const Jogo = require('./controllers/jogoController.js');
const Tecnico = require('./controllers/tecnicoController.js');
const Time = require('./controllers/timeController.js');

//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('Estou aqui'))
app.use('/campeonato', Campeonato);
app.use('/estadio', Estadio);
app.use('/jogador', Jogador);
app.use('/jogo', Jogo);
app.use('/tecnico', Tecnico);
app.use('/time', Time);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))