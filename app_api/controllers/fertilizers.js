const mongoose = require('mongoose');
const fertilizers = mongoose.model('fertilizers');



const fertilizersCreate = function (req, res) {
  fertilizers.create({
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
// ---------------------------------------------------read all-------------------------------
const fertilizerReadAll = async (req, res) =>{
  try {
    const results = await fertilizers.find();
    
    const resfertilizers = results.map(result => ({
      _id: result._id,
      name: result.name,
      image:result.image,
      price:result.price,
      MRP:result.MRP,
      Quantity:result.Quantity,
    }));
    res.status(200).json(resfertilizers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
  };
  
  
  const moviesList = async (req, res) => {
    try {
      const results = await Movies.find();
      
      const movies = results.map(result => ({
        _id: result._id,
        title: result.title,
        posterImageUrl: result.posterImageUrl,
        movieDescription: result.movieDescription,
        releaseDate: result.releaseDate,
        cast:{
          title:result.title,
          heroName:result.heroName,
          heroImageUrl:result.heroImageUrl,
          heroinname:result.heroinname,
          heroinImageUrl:result.heroinImageUrl,
          director:result.director,
          directorImageUrl:result.directorImageUrl,
        },
        reveiws:{
          title:result.title,
          rating:result.rating,
          reviewText:result.reviewText,
          createdOn:result.createdOn,
        }
      }));
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching movies.' });
    }
  };
  // {
  //   "_id": {
  //     "$oid": "65132285f809201dd66759f0"
  //   },
  //   "name": "KATYAYANI ACTIVATED HUMIC ACID, FULVIC ACID FERTILIZER",
  //   "image": "https://www.bighaat.com/cdn/shop/products/pouch-normal-1_1800x1800.jpg?v=1681205567",
  //   "price": 279,
  //   "MRP": 325,
  //   "Quantity": "1kg"
  // }

























const fertilizersReadOne = async(req,res)=>{
  const results=await fertilizers.findById(req.params.fertilizersid);
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


// const fertilizersReadOne = function (req, res) {
//   if (req.params && req.params.fertilizersid) {
//     fertilizers
//       .findById(req.params.fertilizersid)
//       .exec((err, fertilizers) => {
//         if (!fertilizers) {
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
//           .json(fertilizers);
//       });
//   } else {		
//     res		
//       .status(404) 	
//       .json({	
//         "message": "No locationid in request"
//       });		
//   }
// };

const fertilizersUpdateOne = function (req, res) {
  if (!req.params.locationid) {
    res
      .status(404)
      .json({
        "message": "Not found, locationid is required"
      });
    return;
  }
  fertilizers
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

const fertilizersDeleteOne = function (req, res) {
  const locationid = req.params.locationid;
  if (locationid) {
    fertilizers
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
  fertilizersCreate,
  fertilizersReadOne,
  fertilizersUpdateOne,
  fertilizersDeleteOne,
  fertilizerReadAll,
};