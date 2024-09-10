import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {routes} from "../../utils/routes";

const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <nav>
            <ul>
                {routes.map(({to, name}) => (
                    <li>
                        {pathname === to ? <p>{name}</p> : <Link to={to}>{name}</Link>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;