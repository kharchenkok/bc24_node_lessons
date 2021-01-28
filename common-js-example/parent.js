// console.log('global.c', global.c) - underfined;
const child = require ('./child')

console.log('require', require);
// console.log('require.main', require.main);

console.log("__filename", __filename);

console.log(child);
// console.log('global.c', global.c);
global.c='cxzvccv'

process.exit(0)

console.log('global.c', global.c); //перезаписує значення

console.log('process.env',process.env);

//в терміналі команда NODE_ENV=local node parent.js - додасть змінну NODE_ENV:'local' в process.env 

console.log(process.argv);

//в терміналі команда node parent.js hello world - створить масив :
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Lenovo L440\\Desktop\\node\\bc24_node_lessons\\parent.js',
//     'hello',
//     'world'
//   ]