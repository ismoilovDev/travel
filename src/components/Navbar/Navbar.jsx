import { Link, NavLink } from 'react-router-dom';
import { Logo, Nav, NavLinks } from './styled';
import useScroll from '../../hooks/useScroll';
import logo from '../../assets/imgs/logo.png';

function Navbar() {
   const scrolled = useScroll();

   return (
      <Nav scrolled={scrolled}>
         <Link to={'/'}>
            <Logo src={logo} />
         </Link>
         <NavLinks>
            <NavLink
               exact='true'
               to={'/'}
               activeclassname="active"
            >
               Home
            </NavLink>
            <NavLink
               exact='true'
               to={'/monuments'}
               activeclassname="active"
            >
               Monuments
            </NavLink>
            <NavLink
               exact='true'
               to={'/series/1'}
               activeclassname="active"
            >
               Photo Gallery
            </NavLink>
         </NavLinks>
      </Nav>
   )
}

export default Navbar