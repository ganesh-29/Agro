const homelist = (req, res) => {
    res.render('index', { title: "Agrofests" });

};
const fertilizer = (req, res) => {
    res.render('fertilizers',
        {
            title: "Fertilizers",
            f1: {
                image: 'https://www.bighaat.com/cdn/shop/products/pouch-normal-1_1800x1800.jpg?v=1681205567',
                name: 'KATYAYANI ACTIVATED HUMIC ACID, FULVIC ACID FERTILIZER',
                price:279,
            },
            f2: {
                image: 'https://www.bighaat.com/cdn/shop/products/Artboard1copy8_1_479f44b9-a242-4171-a423-99fb03ac7464_1800x1800.webp?v=1673948341',
                name: 'MULTIPLEX MANGANESE MICRONUTRIENT FERTILIZER',
                price:300,

            },
            f3:{
                image:'https://www.bighaat.com/cdn/shop/products/WhatsAppImage2022-01-17at4.57.59PM_1800x1800.jpg?v=1642509663',
                name:'ANAND AGRO INSTA BOR 20% - FERTILIZERS',
                price:150
            },
            f4:{
                image:'https://www.bighaat.com/cdn/shop/products/POMEGRANATE-removebg-preview_1800x1800.png?v=1642774432',
                name:'AMRUTH POMEGRANATE GROW (FERTILIZERS)',
                price:200,
            }

        });
};
const pesticide = (req, res) => {
    res.render('pesticide',
     {
         title: "Pesticide." ,
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
const organic = (req, res) => {
    res.render('organic', 
    { title: "organicfertilizers and organicPesticides",
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
module.exports = {
    homelist,
    fertilizer,
    pesticide,
    organic,
};