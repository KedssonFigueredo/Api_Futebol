const express = require('express');
const router = express.Router();
const Tecnico = require('../models').Tecnico;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const tecnicos = await Tecnico.findAll();
    res.status(200).json(tecnicos);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { nome_tecnico } = req.body;
    const novoTec = await Tecnico.create({ nome_tecnico })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const tecnico = await Tecnico.findByPk(req.params.id);
    res.status(200).json(tecnico);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Tecnico.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {nome_tecnico} = req.body;
    await Tecnico.update(
    { nome_tecnico},
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



