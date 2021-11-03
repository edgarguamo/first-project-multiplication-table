const argv = require('yargs')
  .option('m',{
    alias:'multiplier',
    type: 'number',
    demandOption: true,
    default: 5,
    describe: 'multiplier value'

  })
  .option('b',{
    alias:'base',
    type: 'number',
    default: 10,
    demandOption: true,
    describe: 'Base value'

  })
  .option('l',{
      alias:'list',
      type: 'boolean',
      default: false,
      describe: 'List table'

    })
  .check(( argv, options ) =>{
    if( isNaN( argv.b ) ){
      throw 'La base tiene un número'
    }
    return true;
  })
  .argv;

module.exports = argv;

