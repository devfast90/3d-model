import pinkJacketImg from "../../../assets/images/fashion-screen/pink-jacket.png";
import shoeImg from "../../../assets/images/fashion-screen/shoes.png";
import arrowImg from "../../../assets/images/fashion-screen/arrow.png";
import orangeJacketImg from "../../../assets/images/fashion-screen/orange-jacket.png";
import maskImg from "../../../assets/images/fashion-screen/mask.png";

const column1Images = [
    {
        imageSrc: pinkJacketImg,
        style: {top: -50, left: 0, height: 100},
    },
    {
        imageSrc: arrowImg,
        style: {top: 300, left: 150, height: 100},
    },
    {
        imageSrc: shoeImg,
        style: {top: 680, left: -50, height: 120},
    },
    {
        imageSrc: pinkJacketImg,
        style: {top: 780, left: 0, height: 100},
    },
];

const column2Images = [
    {
        imageSrc: shoeImg,
        style: {top: 20, left: "50%", height: 120},
    },
    {
        imageSrc: orangeJacketImg,
        style: {top: 400, left: "30%", height: 200},
    },
    {
        imageSrc: maskImg,
        style: {top: 700, left: "30%", height: 60},
    },
    {
        imageSrc: arrowImg,
        style: {top: 780, left: 0, height: 100},
    }
]

const column3Images = [
    {
        imageSrc: arrowImg,
        style: {top: 60, left: 150, height: 100},
    },
    {
        imageSrc: arrowImg,
        style: {top: 350, left: 150, height: 100},
    },
    {
        imageSrc: orangeJacketImg,
        style: {top: 640, left: "30%", height: 120},
    },
    {
        imageSrc: shoeImg,
        style: {top: 720, left: 0, height: 100},
    }
]

export const imageList = {
    column1: column1Images,
    column2: column2Images,
    column3: column3Images
};

export const triggers = [0, 0.25, 0.5, 0.75];
