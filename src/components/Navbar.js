import { FaBars } from "react-icons/fa";
import {useState, useEffect} from 'react'

import '../Navbar.css'



const Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(true)

  const controlNavbar = () => {
    if (window.scrollY>100) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', 
    controlNavbar)
    return () => {
      window.removeEventListener('scroll', 
      controlNavbar)
    }
// eslint-disable-next-line
  }, [])


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

 
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
// eslint-disable-next-line
  }, [])

  return (
    <div className={`nav-control ${!showNav && 'hidden'}`}>
      {(toggleMenu || screenWidth > 900) && (
    <ul className="list">
  
      <a className="items" id="logo" href="/#">FITFUSION</a>
      <a className="items" href="/nutrition">NUTRITION</a>
      <a className="items" href="/workouts">WORKOUTS</a>
      <a className="items"href="/analytics">ANALYTICS</a>
      <a className="items" href="/#">SIGN IN</a>

   </ul>
        )}
    <button onClick={toggleNav} className="btn">
          <FaBars />
      </button>

    </div>
  );
}
export default Navbar;