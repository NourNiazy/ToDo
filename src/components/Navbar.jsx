import {style} from "../css/navbar.css";
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className='navbar'>
            <div className="container">
                <h1>ToDo</h1>
                <div className="links">
                    <Link to="/bin">Bin</Link>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/notes">Notes</Link>
                </div>
            <button>Sign in</button>
            </div>
        </nav>
    );
}
 
export default Navbar;