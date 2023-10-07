var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
const homelist = (req, res) => {
    res.render('index', { title: "Agrofests" });

};



// -------------------------------fertilizer page--------------------------
const renderfertilizer = (req, res, fertilizerdata) => {
    res.render('fertilizers',{fertilizerdata});
}
const fertilizer = async (req, res) => {
    body=[];
  const path = '/api/fertilizers';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  await request(
    requestOptions,
    (err, {statusCode}, body) => {
      if (err) {
        console.error('Error:', err);
        // Handle the error, e.g., display an error message on the front end
        return;
      }
  
      
        renderfertilizer(req,res,body);
      
    },
    
  );
};
// -------------------------------pesticide page--------------------------
const renderPesticidesPage = (req, res, pesticidesdata)=>{
  res.render('pesticide',{pesticidesdata});
}
const pesticide = async (req, res) => {
  body=[];
const path = '/api/pesticides';
const requestOptions = {
  url: `${apiOptions.server}${path}`,
  method: 'GET',
  json: {},
  
};
await request(
  requestOptions,
  (err, {statusCode}, body) => {
    if (err) {
      console.error('Error:', err);
      // Handle the error, e.g., display an error message on the front end
      return;
    }

    
    renderPesticidesPage(req,res,body);
    
  },
  
);
};
// -------------------------------organic page--------------------------
const renderOrganicsPage = (req, res, organicsdata)=>{
    res.render('organic',{organicsdata});
}
const organic = async (req, res) => {
    body=[];
  const path = '/api/organics';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  await request(
    requestOptions,
    (err, {statusCode}, body) => {
      if (err) {
        console.error('Error:', err);
        // Handle the error, e.g., display an error message on the front end
        return;
      } 
  
      
        renderOrganicsPage(req,res,body);
      
    },
    
  );
};
// -------------------------------seeds page--------------------------
const renderSeedsPage = (req, res, seedsdata) => {
  res.render('seeds',{seedsdata});
}
const seeds = async (req, res) => {
  body=[];
const path = '/api/seeds';
const requestOptions = {
  url: `${apiOptions.server}${path}`,
  method: 'GET',
  json: {},
  
};
await request(
  requestOptions,
  (err, {statusCode}, body) => {
    if (err) {
      console.error('Error:', err);
      // Handle the error, e.g., display an error message on the front end
      return;
    }
    renderSeedsPage(req,res,body);
  },
  
);
};
module.exports = {
    homelist,
    fertilizer,
    pesticide,
    organic,
    seeds,
};