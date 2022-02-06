import pinkJacketImg from "../../../assets/images/fashion-screen/pink-jacket.png";
import shoeImg from "../../../assets/images/fashion-screen/shoes.png";
import snickersImg from "../../../assets/images/fashion-screen/snickers.png";
import nopeShirtImg from "../../../assets/images/fashion-screen/nope-shirt.png";
import maskImg from "../../../assets/images/fashion-screen/mask.png";
import whiteTShirt from "../../../assets/images/fashion-screen/white-t-shirt.png";
import hoodieImg from "../../../assets/images/fashion-screen/hoodie.png";
import ladyDressImg from "../../../assets/images/fashion-screen/lady-dress.png";

const column1Images = [
    {
        imageSrc: pinkJacketImg,
        imageId: 1.1,
        containerStyle: {height: 400},
        imageStyle: {width: 300, marginBottom: 200},
    },
    {
        imageSrc: snickersImg,
        imageId: 1.2,
        containerStyle: {height: 160 + 350},
        imageStyle: {width: 363, marginBottom: 350, left: '20%'}
    },
    {
        imageSrc: hoodieImg,
        imageId: 1.3,
        containerStyle: {height: 340 + 400},
        imageStyle: {width: 335, left: -20, marginBottom: 400}
    },
    {
        imageSrc: shoeImg,
        imageId: 1.4,
        containerStyle: {height: 190+ 200},
        imageStyle: {width: 363,  left: '-20%', marginBottom: 200},
    },
    {
        imageSrc: pinkJacketImg,
        imageId: 1.5,
        containerStyle: {height: 170},
        imageStyle: {left: '20%', width: 256},
    },
];

const column2Images = [
    {
        imageSrc: shoeImg,
        imageId: 2.1,
        containerStyle: {height: 140 + 300},
        imageStyle: {width: 313, top: 20, left: '30%', marginBottom: 300},
    },
    {
        imageSrc: nopeShirtImg,
        imageId: 2.2,
        containerStyle: {height: 250 + 200},
        imageStyle: {marginBottom: 200, width: 363, left: 0},
    },
    {
        imageSrc: maskImg,
        imageId: 2.3,
        containerStyle: {height: 200 + 300},
        imageStyle: {width: 150, left: '30%', marginBottom: 300},
    },
    {
        imageSrc: whiteTShirt,
        imageId: 2.4,
        containerStyle: {height: 400 + 100},
        imageStyle: {width: 363, left: 30, marginBottom: 100},
    },
    {
        imageSrc: snickersImg,
        imageId: 2.5,
        containerStyle: {height: 150},
        imageStyle: {width: 363, left: '-20%'},
    }
]

const column3Images = [
    {
        imageSrc: snickersImg,
        imageId: 3.1,
        containerStyle: {height: 100+ 200 + 300},
        imageStyle: {width: 280, left: '20%', marginTop: 200, marginBottom: 300}
    },
    {
        imageSrc: ladyDressImg,
        imageId: 3.2,
        containerStyle: {height: 400+200},
        imageStyle: {marginBottom: 200, width: 156, left: 30},
    },
    {
        imageSrc: shoeImg,
        imageId: 3.3,
        containerStyle: {height: 150 + 200},
        imageStyle: {marginBottom: 200, width: 335, right: '-20%'},
    },
    {
        imageSrc: pinkJacketImg,
        imageId: 3.4,
        containerStyle: {height: 200 + 200},
        imageStyle: {marginBottom: 200, width: 301, right: 0},
    },
    {
        imageSrc: maskImg,
        imageId: 3.5,
        containerStyle: {height: 160 + 100},
        imageStyle: {marginBottom: 100, width: 172, left: '30%'},
    }
]

export const imageList = {
    column1: column1Images,
    column2: column2Images,
    column3: column3Images
};

export const triggers = [0, 0.25, 0.5, 0.75];
