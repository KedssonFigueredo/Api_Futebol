const express = require('express');
const router = express.Router();
const Jogo = require('../models').Jogo;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const jogos = await Jogo.findAll();
    res.status(200).json(jogos);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { fk_time_casa, fk_time_fora, fk_campeonato,  fk_estadio} = req.body;
    const novoJogo = await Jogo.create({ fk_time_casa, fk_time_fora, fk_campeonato, fk_estadio})
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const jogo = await Jogo.findByPk(req.params.id);
    res.status(200).json(jogo);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Jogo.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const { fk_time_casa, fk_time_fora, fk_campeonato,  fk_estadio} = req.body;
    await Jogo.update(
        {fk_time_casa, fk_time_fora, fk_campeonato, fk_estadio},
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



