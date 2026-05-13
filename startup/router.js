const express = require('express');
const produtoController = require('../src/routes/ProdutoRouter');

module.exports = (app) => {
    app.use(express.json());
    app.use('/produtos', produtoRouter );
};