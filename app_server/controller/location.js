const homelist = (req, res) => {
    res.render('index', { title: "homepage" });

};
const fertilizer = (req, res) => {
    res.render('fertilizers',
        {
            title: "Fertilizers",
            gan: {
                image: 'https://www.bighaat.com/cdn/shop/products/pouch-normal-1_1800x1800.jpg?v=1681205567',
                name: 'KATYAYANI ACTIVATED HUMIC ACID, FULVIC ACID FERTILIZER',
                price:279,
            },
            c: {
                image: 'https://www.bighaat.com/cdn/shop/products/Artboard1copy8_1_479f44b9-a242-4171-a423-99fb03ac7464_1800x1800.webp?v=1673948341',
                name: 'MULTIPLEX MANGANESE MICRONUTRIENT FERTILIZER',
                price:300,

            },
            u:{
                image:'https://www.bighaat.com/cdn/shop/products/WhatsAppImage2022-01-17at4.57.59PM_1800x1800.jpg?v=1642509663',
                name:'ANAND AGRO INSTA BOR 20% - FERTILIZERS',
                price:150
            },
            d:{
                image:'https://www.bighaat.com/cdn/shop/products/POMEGRANATE-removebg-preview_1800x1800.png?v=1642774432',
                name:'AMRUTH POMEGRANATE GROW (FERTILIZERS)',
                price:200,
            }

        });
};
const pesticide = (req, res) => {
    res.render('pesticide', { title: "Pesticide." });
};
const organic = (req, res) => {
    res.render('organic', { title: "organicfertilizers" });
};
module.exports = {
    homelist,
    fertilizer,
    pesticide,
    organic,
};