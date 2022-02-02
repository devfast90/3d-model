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
        imageStyle: {height: 200, marginBottom: 200},
    },
    {
        imageSrc: snickersImg,
        imageId: 1.2,
        imageStyle: {height: 160, marginBottom: 350, left: '20%'}
    },
    {
        imageSrc: hoodieImg,
        imageId: 1.3,
        imageStyle: {height: 340, left: -20, marginBottom: 400}
    },
    {
        imageSrc: shoeImg,
        imageId: 1.4,
        imageStyle: {height: 190,  left: -120, marginBottom: 200},
    },
    {
        imageSrc: pinkJacketImg,
        imageId: 1.5,
        imageStyle: {left: 200, height: 170},
    },
];

const column2Images = [
    {
        imageSrc: shoeImg,
        imageId: 2.1,
        imageStyle: {height: 140, top: 20, left: '30%', marginBottom: 300},
    },
    {
        imageSrc: nopeShirtImg,
        imageId: 2.2,
        imageStyle: {marginBottom: 200, height: 250, left: 0},
    },
    {
        imageSrc: maskImg,
        imageId: 2.3,
        imageStyle: {height: 200, left: '30%', marginBottom: 300},
    },
    {
        imageSrc: whiteTShirt,
        imageId: 2.4,
        imageStyle: {height: 400, left: 30, marginBottom: 100},
    },
    {
        imageSrc: snickersImg,
        imageId: 2.5,
        imageStyle: {height: 150, left: -140},
    }
]

const column3Images = [
    {
        imageSrc: snickersImg,
        imageId: 3.1,
        imageStyle: {height: 100, left: 200, marginTop: 200, marginBottom: 300}
    },
    {
        imageSrc: ladyDressImg,
        imageId: 3.2,
        imageStyle: {marginBottom: 200, height: 400, left: 30},
    },
    {
        imageSrc: shoeImg,
        imageId: 3.3,
        imageStyle: {marginBottom: 200, height: 150, right: -200},
    },
    {
        imageSrc: pinkJacketImg,
        imageId: 3.4,
        imageStyle: {marginBottom: 200, height: 200, right: 0},
    },
    {
        imageSrc: maskImg,
        imageId: 3.5,
        imageStyle: {marginBottom: 100, height: 160, left: 200},
    }
]

export const imageList = {
    column1: column1Images,
    column2: column2Images,
    column3: column3Images
};

export const triggers = [0, 0.25, 0.5, 0.75];
