const express = require('express');
const router = express.Router();
const cntrlmain = require('../controller/other');
const ctrllocations = require('../controller/location');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/fertilizer', ctrllocations.fertilizer);
router.get('/fertilizer/pesticide/new', ctrllocations.pesticide);
router.get('/fertilizer/pesticide/organic/new', ctrllocations.organic);
router.get('/seeds', cntrlmain.seeds);
module.exports = router;
