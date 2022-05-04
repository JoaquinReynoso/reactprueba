import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar() {
    return (
      <div>
          <ul className= "Nav">
              <li className="Text">INICIO</li>
              <li className="Text">FOTOS</li>
              <li className="Text">CONTACTO</li>
              <li className="Text">AYUDA</li>
              <li><CartWidget greeting='Hola soy algo' /></li>
          </ul>
      </div>
    );
  }



  export default NavBar