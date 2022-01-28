import pinkJacketImg from "../../../assets/images/fashion-screen/pink-jacket.png";
import shoeImg from "../../../assets/images/fashion-screen/shoes.png";
import arrowImg from "../../../assets/images/fashion-screen/arrow.png";
import orangeJacketImg from "../../../assets/images/fashion-screen/orange-jacket.png";
import maskImg from "../../../assets/images/fashion-screen/mask.png";
import whiteTShirt from "../../../assets/images/fashion-screen/white-t-shirt.png";

const column1Images = [
    {
        imageSrc: pinkJacketImg,
        imageId: 1.1,
        imageStyle: {height: 100, marginBottom: 100},
    },
    {
        imageSrc: arrowImg,
        imageId: 1.2,
        imageStyle: {height: 70, marginBottom: 350, left: '20%'}
    },
    {
        imageSrc: shoeImg,
        imageId: 1.3,
        imageStyle: {height: 90, left: -20, marginBottom: 500}
    },
    {
        imageSrc: shoeImg,
        imageId: 1.4,
        imageStyle: {height: 250,  left: -120, marginBottom: 200},
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
        imageStyle: {height: 100, top: 20, left: '30%', marginBottom: 300},
    },
    {
        imageSrc: orangeJacketImg,
        imageId: 2.2,
        imageStyle: {marginBottom: 200, height: 250, left: -200},
    },
    {
        imageSrc: maskImg,
        imageId: 2.3,
        imageStyle: {height: 60, left: '30%', marginBottom: 100},
    },
    {
        imageSrc: whiteTShirt,
        imageId: 2.4,
        imageStyle: {height: 400, left: 30, marginBottom: 100},
    },
    {
        imageSrc: arrowImg,
        imageId: 2.5,
        imageStyle: {height: 100, left: '40%'},
    }
]

const column3Images = [
    {
        imageSrc: arrowImg,
        imageId: 3.1,
        imageStyle: {height: 100, left: '20%', marginTop: 300, marginBottom: 100}
    },
    {
        imageSrc: orangeJacketImg,
        imageId: 3.2,
        imageStyle: {marginBottom: 200, height: 200, right: '-40%'},
    },
    {
        imageSrc: shoeImg,
        imageId: 3.3,
        imageStyle: {marginBottom: 200, height: 100, right: -50},
    },
    {
        imageSrc: pinkJacketImg,
        imageId: 3.4,
        imageStyle: {marginBottom: 200, width: '80%', right: '-30%'},
    },
    {
        imageSrc: maskImg,
        imageId: 3.5,
        imageStyle: {marginBottom: 50, height: 80, right: -50},
    }
]

export const imageList = {
    column1: column1Images,
    column2: column2Images,
    column3: column3Images
};

export const triggers = [0, 0.25, 0.5, 0.75];
