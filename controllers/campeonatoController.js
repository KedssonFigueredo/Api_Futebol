const express = require('express');
const router = express.Router();
const Campeonato = require('../models').Campeonato;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const campeonatos = await Campeonato.findAll();
    res.status(200).json(campeonatos);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { nome_campeonato } = req.body;
    const novoCamp = await Campeonato.create({ nome_campeonato })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const campeonato = await Campeonato.findByPk(req.params.id);
    res.status(200).json(campeonato);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Campeonato.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {nome_campeonato} = req.body;
    await Campeonato.update(
    { nome_campeonato},
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



