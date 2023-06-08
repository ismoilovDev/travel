import ContactForm from "../../components/ContactForm/ContactForm"
import Main from "../../components/Main/Main"
import { Wrap } from '../../styles/styled'
import bg_img from "../../assets/imgs/contact_bg.jpg"

function Contact() {
   return (
      <Main>
         <Wrap bg_url={bg_img} isMoun={true}>
            <div className="text_box">
               <h1>Contact Us</h1>
               <p>
                  For all general enquiries please complete the contact form below
               </p>
            </div>
         </Wrap>
         <ContactForm />
      </Main>
   )
}

export default Contact