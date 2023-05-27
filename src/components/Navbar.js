import { useRef} from "react"
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar= () => {

    const navRef = useRef()

    const showNav = () => {
      navRef.current.classList.toggle("responsive-nav")
    }
    const handleClick = (event) => {
      event.preventDefault();
    };

  return (
    <nav className="navbar">
    <div className="navbar-container" ref={navRef}>
    <button className="nav-btn" onClick={showNav}>
          <FaBars />
      </button>
  
      <a href="/#">FITFUSION</a>
      <a href="/nutrition">NUTRITION</a>
      <a href="/workouts">WORKOUTS</a>
      <a href="/analytics">ANALYTICS</a>
      <a href="/#">SIGN IN</a>

    </div>
    <button className="nav-btn" onClick={showNav}>
          <FaTimes />
        </button>
    </nav>
  );
}
export default Navbar;