const { Router } = require('express');
const router = Router();
 
const { storeFavorite } = require('../controllers/favoriteController');

/**
  @swagger
* /favorite:
*  post:
*   summary:  Cadastra uma nova tarefa
*   responses:
*    200:
*     description: Sucesso!
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/
router.post('/favorite', storeFavorite);
 
module.exports = router;