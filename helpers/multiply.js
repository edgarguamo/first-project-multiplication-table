// exports 
const fs = require ('fs');
const colors = require( 'colors' );

  const tableCreated = async( base = 5,multiplier=10, list = false) =>{
  
  try{
    let out = '';
      for( let i=1; i<=multiplier;i++ ){
        out += (`${ base } *${ i } = ${ base * i } \n`);
      }
      try{
        fs.writeFileSync( `/home/edgarfgm/Documents/ta/node/03-node-bases/generatedFiles/table-${ base }.txt`, out );
      } catch( err ){
        console.log( err )
      }

      if (list) console.log( out )
      return ( `table-${ base }.txt`.rainbow );

  } catch( err ){
    throw err;
  }
      
}

const printPipo = () => console.log('pipo');

module.exports = {
  tableCreated,
  printPipo
}
