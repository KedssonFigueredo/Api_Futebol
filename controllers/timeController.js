const express = require('express');
const router = express.Router();
const Time = require('../models').Time;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const times = await Time.findAll();
    res.status(200).json(times);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { nome_time, cidade, fk_tecnico, fk_estadio} = req.body;
    const novoTec = await Time.create({ nome_time, cidade, fk_tecnico, fk_estadio})
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const time = await Time.findByPk(req.params.id);
    res.status(200).json(time);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Time.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const { nome_time, cidade, fk_tecnico, fk_estadio} = req.body;
    await Time.update(
        {nome_time, cidade, fk_tecnico, fk_estadio},
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



