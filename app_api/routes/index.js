const express = require('express');
const router = express.Router();
const fertilizers = require('../controllers/fertilizers');
// const ctrlReviews = require('../controllers/reviews');
const organics = require('../controllers/organic');
const pesticides = require('../controllers/pesticides');
const seeds = require('../controllers/seeds');

// locations
// --------------ferts route-------------
router
  .route('/fertilizers')
  .post(fertilizers.fertilizersCreate)
  .get(fertilizers.fertilizerReadAll)

router
  .route('/fertilizers/:fertilizersid')
  .get(fertilizers.fertilizersReadOne)
  .put(fertilizers.fertilizersUpdateOne)
  .delete(fertilizers.fertilizersDeleteOne);
  module.exports = router;
// --------------organics route-------------
  router
  .route('/organics')
  .post(organics.organicCreate)
  .get(organics.organicReadAll);

router
  .route('/organics/:organicsid')
  .get(organics.organicReadOne)
  .put(organics.organicUpdateOne)
  .delete(organics.organicDeleteOne);
//   // --------------pests route-------------
  router
  .route('/pesticides')
  .post(pesticides.pesticidesCreate)
  .get(pesticides.pesticidesReadAll)

router
  .route('/pesticides/:pesticidesid')
  .get(pesticides.pesticidesReadOne)
  .put(pesticides.pesticidesUpdateOne)
  .delete(pesticides.pesticidesDeleteOne);
// --------------seeds rout-------------
  router
  .route('/seeds')
  .post(seeds.seedsCreate)
  .get(seeds.seedsReadAll)

router
  .route('/seeds/:seedsid')
  .get(seeds.seedsReadOne)
  .put(seeds.seedsUpdateOne)
  .delete(seeds.seedsDeleteOne);

  
//   module.exports = router;
//   // reviews
//   // router
//   //   .route('/locations/:locationid/reviews')
//   //   .post(ctrlReviews.reviewsCreate);
  
//   // router
//   //   .route('/locations/:locationid/reviews/:reviewid')
//   //   .get(ctrlReviews.reviewsReadOne)
//   //   .put(ctrlReviews.reviewsUpdateOne)
//   //   .delete(ctrlReviews.reviewsDeleteOne);