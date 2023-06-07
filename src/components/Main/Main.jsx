import styled from "styled-components";
import useScroll from './../../hooks/useScroll';

const Wrap = styled.main`
   position: relative;
   width: 100%;
`

const Main = ({ children }) => {
   const scrolled = useScroll();

   return (
      <Wrap scrolled={scrolled}>{children}</Wrap>
   )
}

export default Main