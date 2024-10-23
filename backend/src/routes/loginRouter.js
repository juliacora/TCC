const { Router } = require('express');
const router = Router();
 
const { login } = require('../controllers/loginController');
 

/**
  @swagger
* /login:
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
router.post('/login', login);
 
module.exports = router;