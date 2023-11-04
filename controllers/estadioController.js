const express = require('express');
const router = express.Router();
const Estadio = require('../models').Estadio;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const estadios = await Estadio.findAll();
    res.status(200).json(estadios);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { nome_estadio, cidade} = req.body;
    const novoEstadio = await Estadio.create({ nome_estadio, cidade })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const estadio = await Estadio.findByPk(req.params.id);
    res.status(200).json(estadio);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Estadio.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {nome_estadio, cidade} = req.body;
    await Estadio.update(
    { nome_estadio, cidade},
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



