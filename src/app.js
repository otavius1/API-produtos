const router = require('express').Router();
const Produto = require('../models/Produto');

router.post('/', async (req, res) => {

    const { nome, descricao, valor, codigo, quantidade } = req.body;

    try {
        const novoProduto = {
            nome,
            descricao,
            valor,
            codigo,
            quantidade
        };

        const produtoCriado = await Produto.create(novoProduto);
        return res.status(201).json({ mensagem: "Produto inserido com sucesso!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});

router.get('/', async (req, res) => {

    try {
        const produtos = await Produto.findAll()
        res.status(200).json(produtos)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
})

router.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});

router.delete('/', async (req, res) => {

    try {
        await Produto.destroy({
            where: {},
            truncate: true
        });

        res.status(200).json({ message: "Todos os produtos foram removidos com sucesso!" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});


router.delete('/:id', async (req, res) => {
    
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            res.status(422).json({ message: 'O produto não foi encontrado' });
            return;
        }

        await produto.destroy();
        res.status(200).json({ message: "Produto removido com sucesso!" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});

router.patch('/:id', async (req, res) => {

    const { id } = req.params;
    const { nome, descricao, valor, codigo, quantidade } = req.body;

    const produto = await Produto.findByPk(id)

    try {
        const updateProduto = {
            nome,
            descricao,
            valor,
            codigo,
            quantidade
        };

        await produto.update(updateProduto);
        return res.status(201).json({ mensagem: "Produto atualizado com sucesso!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
})

module.exports = router;
