import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <header>
                    <p className="rosalia-text">Rosalia64</p>

                    <Link to="/">Home</Link>
                    <Link to="/wiki/">Itanium Wiki</Link>
                    <a href="https://github.com/itanium64">Source</a>
                </header>
            </div>
        </>
    )
}

export {
    Navbar
}