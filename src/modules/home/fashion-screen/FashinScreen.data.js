import pinkJacketImg from "../../../assets/images/fashion-screen/pink-jacket.png";
import shoeImg from "../../../assets/images/fashion-screen/shoes.png";
import snickersImg from "../../../assets/images/fashion-screen/snickers.png";
import nopeShirtImg from "../../../assets/images/fashion-screen/nope-shirt.png";
import maskImg from "../../../assets/images/fashion-screen/mask.png";
import whiteTShirt from "../../../assets/images/fashion-screen/white-t-shirt.png";
import hoodieImg from "../../../assets/images/fashion-screen/hoodie.png";
import armyHelmetImg from "../../../assets/images/fashion-screen/army-helmet.png";
import asianDressImg from "../../../assets/images/fashion-screen/asian-dress.png";
import bagImg from "../../../assets/images/fashion-screen/bag.png";
import ladyDressImg from "../../../assets/images/fashion-screen/lady-dress.png";

const column1Images = [
    {
        imageSrc: pinkJacketImg,
        imageId: 1.1,
        containerStyle: {height: 400 + 400},
        imageStyle: {width: 500, marginBottom: 400},
    },
    // {
    //     imageSrc: snickersImg,
    //     imageId: 1.2,
    //     containerStyle: {height: 160 + 350},
    //     imageStyle: {width: 363, marginBottom: 350, left: '20%'}
    // },
    {
        imageSrc: hoodieImg,
        imageId: 1.3,
        containerStyle: {height: 340 + 400},
        imageStyle: {width: 335, left: -20, marginBottom: 400}
    },
    {
        imageSrc: armyHelmetImg,
        imageId: 1.4,
        containerStyle: {height: 463, paddingBottom: 200},
        imageStyle: {width: 463,  left: '-20%', mobileTop: '90%'},
    },
    // {
    //     imageSrc: pinkJacketImg,
    //     imageId: 1.5,
    //     containerStyle: {height: 170},
    //     imageStyle: {left: '20%', width: 256},
    // },
];

const column2Images = [
    {
        imageSrc: shoeImg,
        imageId: 2.1,
        containerStyle: {height: 140 + 300},
        imageStyle: {width: 313, top: 20, mobileTop: '70%', left: '30%', marginBottom: 300},
    },
    {
        imageSrc: nopeShirtImg,
        imageId: 2.2,
        containerStyle: {height: 250 + 200},
        imageStyle: {marginBottom: 200, width: 363, left: 0},
    },
    {
        imageSrc: asianDressImg,
        imageId: 2.3,
        containerStyle: {height: 400, paddingBottom: 300},
        imageStyle: {width: 400, left: '30%', mobileTop: '60%'},
    },
    {
        imageSrc: whiteTShirt,
        imageId: 2.4,
        containerStyle: {height: 400, paddingBottom: 100},
        imageStyle: {width: 363, left: 30, mobileTop: '20%'},
    },
    // {
    //     imageSrc: snickersImg,
    //     imageId: 2.5,
    //     containerStyle: {height: 150},
    //     imageStyle: {width: 363, left: '-20%'},
    // }
]

const column3Images = [
    {
        imageSrc: snickersImg,
        imageId: 3.1,
        containerStyle: {height: 153+ 200 + 300},
        imageStyle: {width: 430, left: '20%', marginTop: 200, marginBottom: 300}
    },
    {
        imageSrc: ladyDressImg,
        imageId: 3.2,
        containerStyle: {height: 588+200},
        imageStyle: {marginBottom: 200, width: 230, left: 30},
    },
    // {
    //     imageSrc: shoeImg,
    //     imageId: 3.3,
    //     containerStyle: {height: 150 + 200},
    //     imageStyle: {marginBottom: 200, width: 335, right: '-20%'},
    // },
    {
        imageSrc: bagImg,
        imageId: 3.4,
        containerStyle: {height: 200 + 200},
        imageStyle: {marginBottom: 200, width: 301, right: 0},
    },
    {
        imageSrc: maskImg,
        imageId: 3.5,
        containerStyle: {height: 272 + 100},
        imageStyle: {marginBottom: 100, width: 290, left: '30%'},
    }
]

export const imageList = {
    column1: column1Images,
    column2: column2Images,
    column3: column3Images
};

export const triggers = [0, 0.25, 0.5, 0.75];
