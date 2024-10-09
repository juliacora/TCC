const { Router } = require('express');
const router = Router();
 
const { storeFavorite } = require('../controllers/favoriteController');
 
router.post('/favorite', storeFavorite);
 
module.exports = router;