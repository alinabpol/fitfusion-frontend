import { FaBars } from "react-icons/fa";
import {useState, useEffect} from 'react'

import { useAuth0 } from "@auth0/auth0-react";

import '../styling/Navbar.css'



const Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(true)

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const { isAuthenticated } = useAuth0();
  // console.log("authenticated?", isAuthenticated)

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
          <a className="items logo" href="/">
            FITFUSION
          </a>
  
          {isAuthenticated ? (
            <>
              <a className="items" href="/recipes">
                YOUR RECIPES
              </a>
              <a className="items" href="/nutrition">
                NUTRITION
              </a>
              <a className="items" href="/workouts">
                WORKOUTS
              </a>
              <a className="items" href="/analytics">
                ANALYTICS
              </a>
              <a
                className="items"
                href="/"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                SIGN OUT
              </a>
            </>
          ) : (
            <>
              <a className="items" href="/nutrition">
                NUTRITION
              </a>
              <a className="items" href="/workouts">
                WORKOUTS
              </a>
              <a className="items" href="/analytics">
                ANALYTICS
              </a>
              <a className="items" href="/" onClick={() => loginWithRedirect()}>
                SIGN IN
              </a>
            </>
          )}
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        <FaBars />
      </button>
    </div>
  );
}
export default Navbar;