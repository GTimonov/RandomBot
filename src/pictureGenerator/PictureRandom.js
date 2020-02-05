
const {registerFont, createCanvas} = require('canvas');
const CanvasTextWrapper = require('./canvas-text-wrapper').CanvasTextWrapper;

const bgColors = [
    '#995D8188', '#EB825888', '#F6F74088', '#D8DC6A88','#6689A188', '#00000000'
]

const fonts = [
    {fontFamily:'Diskoteque', fontPath: './src/assets/Diskoteque.ttf'}, 
    {fontFamily:'OpenMinded', fontPath: './src/assets/Open Minded.otf'}
]
const headerParams =  {
    textColor: '#6689A1',
    font: '24px OpenMinded',
    textAlign: 'center',
    lineHeight: 1,
    paddingX: 20,
    paddingY: 20,
    allowNewLine: true

};
function headerText(min, max){
    return `Random number \n from ${min} to ${max} is:`;
}
const numParams = {
    textColor: 'black',
    font: '100px Diskoteque',
    textAlign: 'center',
    paddingY: 50,
    lineHeight:5,
    paddingX: 50,
    verticalAlign: '40px',
    sizeToFill:true, 
    maxFontSizeToFill:100,
    stroke:true
}
function start (){
    if (!this.started){
        fonts.forEach(font => {
            registerFont(font.fontPath, {family:font.fontFamily});
        });
        
        this.canvas = createCanvas(256, 256);
        this.started = true;
    }
    else {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

exports.generate = function (num, max, min=1) {
    start();    
    CanvasTextWrapper(this.canvas, headerText(min, max), headerParams);
    addBackground(this.canvas);
    CanvasTextWrapper(this.canvas, String(num), numParams);
    
    return this.canvas.toBuffer();
}

function  getRandomColor() {
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
}



function addBackground() {
    const lengthX = 32;
    const lengthY = 16;
    const y_top_padding = 10;
    const cellSize = canvas.width / lengthX;
    const context = canvas.getContext('2d');
    

   
    for (let y = y_top_padding; y < lengthY+y_top_padding; y++) {
        const leftCellsPass = Math.floor(Math.random()*10);
        const rightCellsPass = lengthX - Math.floor(Math.random()*10);

        for (let x = 0; x < lengthX; x++) {
            if (x>=leftCellsPass && x<=rightCellsPass) {
                const x_coor = x*cellSize, y_coor = y*cellSize;
                context.beginPath();
                context.rect(x_coor, y_coor, cellSize, cellSize);
                context.fillStyle = bgColors[Math.floor(Math.random()*bgColors.length)];
                context.fill();
            }
        }   
    }
 }





