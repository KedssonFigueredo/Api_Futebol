const express = require('express');
const router = express.Router();
const Jogador = require('../models').Jogadores;

//Busca campeonatos (GET)
router.get('/', async (req, res) => {
    const jogadores = await Jogador.findAll();
    res.status(200).json(jogadores);
});

//Cadastra campeonatos (POST)
router.post('/', async (req, res) => {
    const { nome_jogador, posicao, idade, fk_time } = req.body;
    const novoJogador = await Jogador.create({ nome_jogador, posicao, idade, fk_time })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Campeonato (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const jogador = await Jogador.findByPk(req.params.id);
    res.status(200).json(jogador);
});

//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Jogador.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
    const { nome_jogador, posicao, idade, fk_time } = req.body;
    await Jogador.update(
        { nome_jogador, posicao, idade, fk_time },
    {
    where: {id:req.params.id},
    }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
    });
    module.exports=router;



