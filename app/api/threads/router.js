const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');

router.post('/create-threads', create);
router.get('/threads', index);
router.get('/threads/:id', find);
router.put('/threads/:id', update);
router.delete('/threads/:id', destroy);

module.exports = router;
