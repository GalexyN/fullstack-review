const express = require('express');
const router = express.Router();

// controller routes
const repoRoutes = require('../controller/repos');

router.post('/repos', repoRoutes.getReposAndCreate);

router.get('/repos', repoRoutes.getReposFromDatabase);

router.get('/deleterepos', repoRoutes.deleteRepo);

module.exports = router;