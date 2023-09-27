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
// --------------organics route-------------
  router
  .route('/organics')
  .post(organics.fertilizersCreate);

router
  .route('/organics/:organicsid')
  .get(organics.fertilizersReadOne)
  .put(organics.fertilizersUpdateOne)
  .delete(organics.fertilizersDeleteOne);
  // --------------pests route-------------
  router
  .route('/pesticides')
  .post(pesticides.fertilizersCreate);

router
  .route('/pesticides/:pesticidesid')
  .get(pesticides.fertilizersReadOne)
  .put(pesticides.fertilizersUpdateOne)
  .delete(pesticides.fertilizersDeleteOne);
// --------------seeds rout-------------
  router
  .route('/seeds')
  .post(seeds.fertilizersCreate);

router
  .route('/seeds/:seedsid')
  .get(seeds.fertilizersReadOne)
  .put(seeds.fertilizersUpdateOne)
  .delete(seeds.fertilizersDeleteOne);

  
  module.exports = router;
  // reviews
  // router
  //   .route('/locations/:locationid/reviews')
  //   .post(ctrlReviews.reviewsCreate);
  
  // router
  //   .route('/locations/:locationid/reviews/:reviewid')
  //   .get(ctrlReviews.reviewsReadOne)
  //   .put(ctrlReviews.reviewsUpdateOne)
  //   .delete(ctrlReviews.reviewsDeleteOne);