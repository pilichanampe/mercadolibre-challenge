const { Router } = require('express');
const { getSearchResults, getItem } = require('../controllers/items.controller');

const router = Router();

router.get('/', getSearchResults);
router.get('/:id', getItem);

module.exports = router;