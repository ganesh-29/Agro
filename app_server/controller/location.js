var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
const homelist = (req, res) => {
    res.render('index', { title: "Agrofests" });

};



// -------------------------------fertilizer page--------------------------
const renderfertilizer = (req, res, fertilizerdata) => {
    console.log("received data:"+fertilizerdata);
    res.render('fertilizers',{fertilizerdata});
}
const fertilizer = (req, res) => {
    var requestOptions, path;
  path = '/api/fertilizers';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
  };
  request(
    requestOptions,
    function(err, response, body) {
      var i, data;
      renderfertilizer(req, res, body);
    }
  );
};
// -------------------------------pesticide page--------------------------
const pesticide = (req, res) => {
    res.render('pesticide',
     {
         title: "Agrofests" ,
        p1: {
            image:'https://www.bighaat.com/cdn/shop/files/2_7ce4741d-1c4e-4de7-8dee-5669cdd3e5bb_1800x1800.webp?v=1683894692',
            name:'NANOBEE AGROKILL INSECTICIDE',
            price:725,
        },
        p2:{
            image:'https://www.bighaat.com/cdn/shop/products/511571916580Starthene_1800x1800.png?v=1680096317',
            name:'STARTHENE INSECTICIDE',
            price:745,
        },
        p3:{
            image:'https://www.bighaat.com/cdn/shop/files/b6157145e0f17cbb8411f8b2101d85cc_1800x1800.png?v=1684482381',
            name:'SOLDIER',
            price:350,
        },
        p4:{
            image:'https://www.bighaat.com/cdn/shop/products/Mealy-Raze_800x.jpg?v=1617675153',
            name:'KAYBEE MEALY RAZE',
            price:425
        },
        p5:{
            image:'https://www.bighaat.com/cdn/shop/files/3_2615513f-78ea-47ff-8cca-c1b5c6388861_1800x1800.png?v=1689404116',
            name:'KRANTI MICRONUTRIENT PESTICIDE',
            price:330
        }
    
    });
};
// -------------------------------organic page--------------------------
const organic = (req, res) => {
    res.render('organic', 
    { title: "Agrofests",
    o1: {
        image:'https://www.bighaat.com/cdn/shop/products/1_4_555bb7a3-042e-4390-857a-6a8df8d7d03a_1800x1800_2_1800x1800.webp?v=1674564560',
        name:'DR SOIL ARECA SPECIAL BIO FERTILIZER',
        price:2540
    },
    o2: {
        image:'https://www.bighaat.com/cdn/shop/files/82f5c2f9928698bb1d51b608a91bcf0c_1800x1800.png?v=1687761755',
        name:'MULTIPLEX TRISHUL (VAM) BIO FERTILIZER',
        price:355
    },
    o3: {
        image:'https://www.bighaat.com/cdn/shop/products/Neemol_1b192a66-f958-46b4-a8e1-50ee6bf0b5c4_1800x1800.jpg?v=1676282521',
        name:'GREENPEACE NEEMOL (10000 PPM) BIO NEEM OIL INSECTICIDE',
        price:940
    },
    o4:{
        image:'https://www.bighaat.com/cdn/shop/products/PhospoBacteria-600x600_1800x1800.jpg?v=1608700904',
        name:'PHOSPHO BACTERIA BIO FERTILIZER',
        price:'494'
    }

 });
};
// -------------------------------seeds page--------------------------
const seeds = (req, res) => {
    res.render('seeds',
     { title: 'Agrofests',
    s1:{
        image:'https://www.bighaat.com/cdn/shop/products/P3401-CORN_1800x1800.jpg?v=1601728758',
        name:'P3401 CORN',
        price:2900
    },
    s2:{
        image: 'https://www.bighaat.com/cdn/shop/products/advanta-pac-837_1800x1800.jpg?v=1623755110',
        name:'PAC837 HYBRID PADDY (RICE)',
        price:9500
    },
    s3:{
        image:'https://www.bighaat.com/cdn/shop/products/MAGNA-COTTON_RASI_800x.jpg?v=1601728013',
        name:'MAGNA COTTON Rasi Seeds',
        price:583
    },
    s4: {
        image:'https://www.bighaat.com/cdn/shop/files/WhatsAppImage2023-08-22at11.22.59_ChengalarayaJayasek_1800x1800.jpg?v=1694597733',
        name:'IMPROVED BLACK MUSTARD SEEDS',
        price:595
    }
    });
};
module.exports = {
    homelist,
    fertilizer,
    pesticide,
    organic,
    seeds,
};