
require = require("esm")(module/*, options*/)
module.exports = require("./")


// const child = require ('./child')
import {a} from "./child.js"




console.log(a);
// console.log("__filename", __filename);
// console.log('global.c', global.c);
// global.c='cxzvccv'

// // process.exit(0)

// console.log('global.c', global.c); //перезаписує значення

// console.log('process.env',process.env);

// //в терміналі команда NODE_ENV=local node parent.js - додасть змінну NODE_ENV:'local' в process.env 

// console.log(process.argv);

