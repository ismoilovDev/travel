import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Container } from "../../styles/styled";
import './style.scss';

function Footer() {
   return (
      <div className="footer">
         <Container>
            <div className="footer_content">
               <div className="social">
                  <a href="https://t.me/eldorbekismoilov">
                     <FaTelegramPlane />
                  </a>
                  <a href="https://www.instagram.com/thisiseldorbek/">
                     <AiOutlineInstagram />
                  </a>
               </div>
               <p>
                  Copyright © 2023 Historical Monuments by Eldorbek
               </p>
            </div>
         </Container>
      </div>
   )
}

export default Footer