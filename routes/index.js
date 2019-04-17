const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(404).send('Error 404 (not found)');
  console.log('404 -> GET /');
});

module.exports = router;