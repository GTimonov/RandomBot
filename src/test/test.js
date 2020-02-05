const generatePic = require('../pictureGenerator/PictureRandom').generate;
const generateNum = require('../utils/randomGenerator').generate;
const fs = require('fs');

// let random = Math.random()*100
// let number = parseInt(random);
// let png = pictureGenerator.generate(number);

//const num = generateNum(1, 10000);
let picData = generatePic(99889, 10000);
fs.writeFileSync('./src/generated/outd.png', picData);
