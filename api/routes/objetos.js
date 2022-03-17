var express = require( "express" );
var router = express.Router();

var mysql = require('../lib/db')

router.get("/", function(req, res) {
    try
    {
      console.log( "req nom", req.query )
        //const result = await mysql.query( 'SELECT r.*, o.ParentID AS ParentID, o.ID AS objectID FROM objects_types AS o RIGHT JOIN recipe AS r ON o.ID = r.ResultObjectTypeID WHERE o.ID > 2399' )
      new Promise( async ( resolve, reject ) =>
      {
        let result = await mysql.query( 'SELECT r.*, o.ParentID AS ParentID, o.ID AS objectID FROM objects_types AS o RIGHT JOIN recipe AS r ON o.ID = r.ResultObjectTypeID WHERE o.ID > 2399' )
        //console.log( result )
        res.status( 200 ).json( { result } )
      })        
      
    } catch ( error )
    {
        console.log( error );
    }
});

module.exports = router;