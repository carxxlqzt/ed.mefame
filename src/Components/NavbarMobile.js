import React from 'react'
import {Box} from '@chakra-ui/react'
import './css/style.css'
import { FiMenu, FiX } from "react-icons/fi";
import {Link} from 'react-router-dom'
export const NavbarMobile = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = React.useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <Box position='absolute' top='0'>
     {menuClicked ? (
      <FiX size={25}  onClick={toggleMenuClick} className='iconNavbar' />
    ) : (
      <FiMenu
        size={25}
       
        onClick={toggleMenuClick}
      />
    )}
    <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <Link className="navbar__link" to={'/'+item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Box>
   
  )
}
