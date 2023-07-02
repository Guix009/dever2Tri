const express = require('express');

const prodController = require('./prodControllers/prodController');

const routes = express.Router();

routes.get('/', prodController.raiz );
routes.get('/produtos', prodController.produtos );
routes.get('/Cliente', prodController.Cliente );
routes.get('/Venda', prodController.Venda );
routes.get('/Compra',prodController.Compra  );
routes.get('/Local', prodController.Local);

module.exports = routes;