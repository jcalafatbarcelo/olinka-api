var express = require( "express" );
var router = express.Router();

var mysql = require('../../lib/db')
router.get( "/:filtro", function ( req, res )
{
  //console.log(process.env.MYSQL_DATABASE)
    try
    {

      const FILTROS = {
        jorvik: `SELECT * FROM getjorvik`,
        licencias: `SELECT * FROM getlicencias`,
        packs: `SELECT * FROM getpacks`,
        tools: `SELECT * FROM gettools`,
        items: `SELECT * FROM getitems`,
        all: `SELECT * FROM getall`
      }
      const filtro = req.params.filtro
      //console.log(FILTROS[filtro])
      //const result = await mysql.query( 'SELECT r.*, o.ParentID AS ParentID, o.ID AS objectID FROM objects_types AS o RIGHT JOIN recipe AS r ON o.ID = r.ResultObjectTypeID WHERE o.ID > 2399' )
      new Promise( async ( resolve, reject ) =>
      {
        let result = await mysql.query( FILTROS[filtro] || FILTROS['all'] )
        //console.log( result )
        res.status( 200 ).json(  result )
      })        
      
    } catch ( error )
    {
        console.log( error );
    }
});

module.exports = router;