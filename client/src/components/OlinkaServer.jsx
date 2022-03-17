import { Component } from 'react';
import { Link } from 'react-router-dom';
import CabeceraH1 from './CabeceraH1';

export class OlinkaServer extends Component {
  render() {
    return (
        <>
          <div>
          
            <main>
                <CabeceraH1 titulo={`Nuestro Servidor`} clase={`bg-header-olinka`} subtitulo={`El legado de Olinka`}></CabeceraH1>
        
                <div className="center_block">
                    <p>El Legado de Olinka ofrece una nueva experiencia libre para los jugadores de Life is Feudal: Your Own. El servidor está abierto desde diciembre de 2021 y ofrece una experiencia única para todos aquellos que quieran disfrutar del LiF:YO en estado puro. La única norma es que sólo se permite un PJ por cuenta... el resto de normas quedarán a cargo de los propios jugadores.</p>
                    <h2>Novedades</h2>
                    <p>El Legado de Olinka incluye el sistema de comercio a través del TradingPost Mod de <Link to="https://nyuton.net/tradeposts-mod-life-is-feudal-your-own/" target="_blank" title='Feudal Tools'>feudal.tools</Link>. Además, cuenta con el <Link to="https://jorvikmod.com/" target='_blank'>JorvikMod</Link> integrado en nuestro Mod.</p>
                    <h3>Olinka Mod</h3>
                    <p>
                    La principal novedad que incluye el Legado de Olinka es nuestro Mod personalizado: <Link to='/life-is-feudal/olinka-mod'>OlinkaMod</Link>.
                    </p>
                    <p>
                    El Mod cargará gracias al BasilMod, el JorvikMod, y los objetos y recetas nuevos que formarán parte de la aventura en El Legado de Olinka. Puedes descubrir todo lo que incluirá el Mod <Link to='/life-is-feudal/olinka-mod' title='Olinka Mod'>aquí</Link>.
                    </p>
                </div>
            </main>
          </div>
        </>
      );
  }
}

export default OlinkaServer;
