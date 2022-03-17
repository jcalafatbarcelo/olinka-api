import { Link } from "react-router-dom"

export default function ObjectsLinks() {
  return (
    
    <div className="center_block">
        <hr />
        <ul className="destacados">
            <li><Link to="/life-is-feudal/olinka-mod/jorvik">Objetos del Jorvik MOD</Link></li>
            <li><Link to="/life-is-feudal/olinka-mod/diarios">Los Diarios de Encargos</Link></li>
            <li><Link to="/life-is-feudal/olinka-mod/licencias">Licencias de obra</Link></li>
            <li><Link to="/life-is-feudal/olinka-mod/items">Objetos especiales del MOD</Link></li>
            <li><Link to="/life-is-feudal/olinka-mod/packs">Packs para generar monedas</Link></li>
        </ul>
    </div>
  )
}
