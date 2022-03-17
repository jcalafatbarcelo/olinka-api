import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CabeceraH1 from "../components/CabeceraH1"
import FichaObject from '../components/FichaObject'
import ObjectsLinks from "./ObjectsLinks";

export default function ListadoObjetos (props)
{
  const FILTROS = {
    jorvik: `jorvik`,
    licencias: `licencias`,
    packs: `packs`,
    diarios: `tools`,
    items: `items`,
    all: `all`
  }
    const params =FILTROS[useParams().filtro]
  const callAPI = async ( params ) =>
  {
    console.log( process.env );
    const URL_API = process.env.URL_API ? process.env.URL_API : 'http://localhost'
      //await fetch( process.env.REACT_APP_URL_API+`:9000/testAPI` )
      await fetch( URL_API+`:9000/objetos/${params}` )
      .then( res => res.json() )
      .then( res => setRecetas(res) );
      
    }
    
    const [ recetas, setRecetas ] = useState( [] )

    useEffect(() => {
      callAPI(params)
    }, [params])
  
    console.log(useParams());
    return (
      <>
            <div>
            
                <main>
                    <CabeceraH1 clase={`bg-header-olinka`} titulo={`Jorvik MOD`} subtitulo={`Incluido en el Olinka MOD Pack`}></CabeceraH1>
                   
                    <div className="center_block clear_down">
                        <p>El Pack Jorvik MOD incluye todos los edificios y objetos crafteables que puedes encontrar en su pack própio desde su web oficial: <a href="https://jorvikmod.com/" target={`_blank`}>https://jorvikmod.com/</a> </p>
                        <h2>Listado de objetos</h2>
                    </div>
                    
                <div className="object-list">
              
              {      
                
                        recetas.map( ( e,k ) =>
                        {
                            return (
                                    <FichaObject key={k} e={e} k={k}></FichaObject>
                            )
                        }
                        )
                        
                    }
                        
                </div>
                    <ObjectsLinks />
                </main>
            </div>
        </>
    )

}
