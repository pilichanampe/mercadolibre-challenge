const { Router } = require('express');
const { getSearchResults } = require('../controllers/products');

const router = Router();

router.get('/', getSearchResults);



module.exports = router;