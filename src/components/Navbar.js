import { FaBars, FaTimes } from "react-icons/fa";
import {useState, useEffect} from 'react'


const Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
    <nav>
      {(toggleMenu || screenWidth > 900) && (
    <ul className="list">
  

      <li className="items" href="/#">FITFUSION</li>
      <li className="items" href="/nutrition">NUTRITION</li>
      <li className="items" href="/workouts">WORKOUTS</li>
      <li className="items"href="/analytics">ANALYTICS</li>
      <li className="items" href="/#">SIGN IN</li>

   </ul>
        )}
    <button onClick={toggleNav} className="btn">
          <FaBars />
      </button>
    {/* <button className="btn-close" >
          <FaTimes />
        </button> */}
 
    </nav>
  );
}
export default Navbar;