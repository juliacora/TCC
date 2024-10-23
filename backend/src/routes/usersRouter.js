/**
 INFORMAÇÕES DO ROUTER

 Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente e responderá alguma informação. Cada rota pode ter uma ou mais funções, e ela deve ser única na API com o seu método HTTP definido, ao receber uma chamada ela faz todo o processamento necessário para retornar os dados que foi solicitado
*/

// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    storeUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController')


// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)

/**
* @swagger
* /users/list:
*  get:
*   summary: Retorta todas as tarefas
*   responses:
*    200:
*     description: Uma lista de tarefas
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/
router.get('/users/list', listUsers);

/**
  @swagger
* /store/user:
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
router.post('/store/user', storeUser);

 /**
  @swagger
  * /user/:id:
  *  put:
  *   summary:  Atualiza uma tarefa pelo id
  *   responses:
  *    200:
  *     description: Uma lista de tarefas
  *     content:
  *      application/json:
  *       schema:
  *        type: array
  *        items:
  *         type: object
  */

router.put('/user/:id', updateUser);

  /**
  @swagger
* /user/delete:
*  delete:
*   summary:  Deleta uma tarefa pelo id
*   responses:
*    200:
*     description: Uma lista de tarefas
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/
  
router.delete('/user/:id', deleteUser);


module.exports = router;