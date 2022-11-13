import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <p className="rosalia-text">Rosalia64</p>

                <Link to="/">Home</Link>
                <a href="https://github.com/itanium64">Source</a>
                <Link to="/wiki/">Wiki</Link>
            </div>
        </>
    )
}

export {
    Navbar
}