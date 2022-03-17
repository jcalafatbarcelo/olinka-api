import {useEffect, useState} from 'react'

export default function APICalls ()
{
    const callAPI = async () => {
    await fetch( "http://localhost:9000/testAPI" )
      .then( res => res.text() )
      .then( res => setEstado({ apiResponse:  res } ));
    }
    const [estado, setEstado] = useState({ apiResponse: '' })
    useEffect(() => {
        callAPI()
    }, [])
    


  return estado
}
