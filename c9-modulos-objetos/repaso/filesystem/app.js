
const fs = require('fs');
const momment = require('moment');

//console.log(__dirname);

const data = fs.readFileSync(__dirname + '/datos.txt','utf-8');

//console.log(data);

//uso de momment
console.log(momment().format('MM/DD-YYYY'));
console.log(momment().format('HH:mm:ss'));