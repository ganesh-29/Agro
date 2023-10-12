const mongoose = require('mongoose');
const seeds = mongoose.model('seeds');

const seedsReadAll = async (req, res) =>{
  try {
    const results = await seeds.find();
    
    const resseeds = results.map(result => ({
      _id: result._id,
      name: result.name,
      image:result.image,
      price:result.price,
      MRP:result.MRP,
      Quantity:result.Quantity,
    }));
    res.status(200).json(resseeds);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
  };


const seedsCreate = function (req, res) {
    seeds.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(","),
    openingTimes: [{
      days: req.body.days1,
      opening: req.body.opening1,
      closing: req.body.closing1,
      closed: req.body.closed1,
    }, {
      days: req.body.days2,
      opening: req.body.opening2,
      closing: req.body.closing2,
      closed: req.body.closed2,
    }]
  }, (err, location) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(location);
    }
  });
};

const seedsReadOne = async(req,res)=>{
  const results=await seeds.findById(req.params.seedsid);
  // const resfertilizers = results.map(result => ({
  //   _id: result._id,
  //   name: result.name,
  //   image:result.image,
  //   price:result.price,
  //   MRP:result.MRP,
  //   Quantity:result.Quantity,
  // }));
  res.status(200)
  .json(results);
}

// const seedsReadOne = function (req, res) {
//   if (req.params && req.params.locationid) {
//     seeds
//       .findById(req.params.locationid)
//       .exec((err, location) => {
//         if (!location) {
//           res	
//             .status(404) 
//             .json({	
//               "message": "locationid not found"
//             });	 
//           return;
//         } else if (err) {
//           res	
//             .status(404) 
//             .json(err); 
//           return; 	
//         }
//         res		
//           .status(200)
//           .json(location);
//       });
//   } else {		
//     res		
//       .status(404) 	
//       .json({	
//         "message": "No locationid in request"
//       });		
//   }
// };

const seedsUpdateOne = function (req, res) {
  if (!req.params.locationid) {
    res
      .status(404)
      .json({
        "message": "Not found, locationid is required"
      });
    return;
  }
  seeds
    .findById(req.params.locationid)
    .select('-reviews -rating')
    .exec((err, location) => {
      if (!location) {
        res
          .json(404)
          .status({
            "message": "locationid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      location.name = req.body.name;
      location.address = req.body.address;
      location.facilities = req.body.facilities.split(",");
      location.coords = [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
      ];
      location.openingTimes = [{
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1,
      }, {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2,
      }];
      location.save((err, location) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(location);
        }
      });
    }
  );
};

const seedsDeleteOne = function (req, res) {
  const locationid = req.params.locationid;
  if (locationid) {
    seeds
      .findByIdAndRemove(locationid) 
      .exec((err, location) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No locationid"
      });
  }
};

module.exports = {
  seedsReadAll,
  seedsCreate,
  seedsReadOne,
  seedsUpdateOne,
  seedsDeleteOne
};