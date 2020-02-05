exports.generate = function (max, min=0){
    let random = Math.random() * (max - min +1) + min;
    let number = Math.floor(random);
    return number;
}