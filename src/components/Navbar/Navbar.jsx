import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CloseBtn, Logo, Nav, NavLinks, OpenBtn } from './styled';
import useScroll from '../../hooks/useScroll';
import logo from '../../assets/imgs/logo.png';
import { CgClose, CgMenuRightAlt } from "react-icons/cg";

function Navbar() {
   const scrolled = useScroll();
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation()
   useMemo(() => {
      setIsOpen(false)
   }, [location])

   return (
      <Nav scrolled={scrolled}>
         <Link to={'/'}>
            <Logo src={logo} />
         </Link>
         <NavLinks className={isOpen ? "open": "close"}>
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
               to={'/gallery'}
               activeclassname="active"
            >
               Photo Gallery
            </NavLink>
            <NavLink
               exact='true'
               to={'/contact'}
               activeclassname="active"
            >
               Contact Us
            </NavLink>
            <CloseBtn onClick={() => setIsOpen(false)}>
               <CgClose />
            </CloseBtn>
         </NavLinks>
         <OpenBtn onClick={() => setIsOpen(true)}>
            <CgMenuRightAlt />
         </OpenBtn>
      </Nav>
   )
}

export default Navbar