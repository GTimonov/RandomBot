const TelegramBot = require('node-telegram-bot-api');
const tokens = require('../tokens');
const messages = require('./messages')
const token = tokens.LI_TOKEN;
const generateNum = require('../utils/randomGenerator').generate;
const generatePic = require('../pictureGenerator/PictureRandom').generate;

exports.startBot = function (){
    var bot = new TelegramBot(token, {polling: true}); 
    
    // bot.onText(/\/start/, (msg) => {
    //     bot.sendMessage(msg.chat.id, messages.MESSAGE.WELCOME, {parse_mode:'HTML'});
    // });

    bot.onText(/^\d+$/, (msg)=>{
        const num = generateNum(msg.text);
        bot.sendMessage(msg.chat.id, messages.MESSAGE.AND_WINNER);
        const picData = generatePic(num, msg.text);
        bot.sendSticker(msg.chat.id, picData)
    })
}
