const express = require('express');
const router = express.Router();
const cntrlmain = require('../controller/other');
const ctrllocations = require('../controller/location');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/fertilizers', ctrllocations.fertilizer);
router.get('/organics', ctrllocations.organic);
router.get('/pesticides', ctrllocations.pesticide);
router.get('/seeds', ctrllocations.seeds);
router.get('/fertilizers/:fertilizersid', ctrllocations.fertilizersinfo);
router.get('/organics/:organicsid', ctrllocations.organicsinfo);
router.get('/pesticides/:pesticidesid', ctrllocations.pesticidesinfo);
router.get('/seeds/:seedsid', ctrllocations.seedsinfo);
module.exports = router;
