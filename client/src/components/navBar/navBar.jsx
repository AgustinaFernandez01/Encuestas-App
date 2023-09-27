import {Link} from 'react-router-dom';
import style from './navBar.module.css';

export default function NavBar (){
    return(
        <nav>
            <ul className={style.navBar}>
                <li ><Link to='/' >Home</Link></li>
                <li><Link to='/consult' >Resultados</Link></li>
            </ul>
        </nav>
    );
}