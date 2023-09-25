const seeds = (req, res) => {
    res.render('seeds',
     { title: 'seeds',
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
module.exports = { seeds };