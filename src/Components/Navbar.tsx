import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <p className="rosalia-text">Rosalia64</p>

                <a href="/">Home</a>
                <a href="https://github.com/itanium64">Source</a>
                <a href="/wiki/">Wiki</a>
            </div>
        </>
    )
}

export {
    Navbar
}