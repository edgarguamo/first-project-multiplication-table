// table of 5

const { tableCreated } = require('./helpers/multiply');
const { printPipo } = require('./helpers/multiply');
const argv = require('./config/yargs');



console.clear();

tableCreated( argv.b,argv.m, argv.l )
   .then( fileName => console.log( fileName, ' created' ) )
   .catch( error => console.log( error ) )
printPipo();


