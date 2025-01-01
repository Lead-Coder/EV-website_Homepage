import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>EV-olution</div>
            <ul className="navm">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='contact'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar