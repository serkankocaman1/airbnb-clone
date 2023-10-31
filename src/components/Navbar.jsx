import logo from "/assets/airbnb-logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
        <nav className="navbar-container">
            <img 
            src={logo}
            alt="logo" 
            width={82}
            height={25}/>
        </nav>
    </header>
  )
}

export default Navbar