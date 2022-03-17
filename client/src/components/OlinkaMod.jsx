import { Component } from 'react';
import { Link } from 'react-router-dom';
import CabeceraH1 from './CabeceraH1';
export class OlinkaMod extends Component {
  render() {
    return (
      <>
        <div>
              
          <main>
            <CabeceraH1 titulo={`Olinka MOD`} clase={`bg-header-olinka`} subtitulo={`Life is Feudal`}></CabeceraH1>
            <div className="center_block">
              <p>Nuestro MOD incluye múltiples objetos. Entre ellos podremos encontrar los siguientes:</p>
              <ul className="destacados">
                <li><Link to="jorvik">Objetos del Jorvik MOD</Link></li>
                <li><Link to="diarios">Los Diarios de Encargos</Link></li>
                <li><Link to="licencias">Licencias de obra</Link></li>
                <li><Link to="items">Objetos especiales del MOD</Link></li>
                <li><Link to="packs">Packs para generar monedas</Link></li>
              </ul>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default OlinkaMod;