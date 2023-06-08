import React from 'react';
import './style.css';

function ContactForm() {
   return (
      <section className="contact" id="contact">
         <div className="containers">
            <form>
               <div className="contact-box">
                  <div className="left"></div>
                  <div className="right">
                     <h2 className="contact-h2">Contact Us</h2>
                     <input type="text" className="field" required placeholder="Name*" />
                     <input type="text" className="field" required placeholder="Phone*" />
                     <input type="email" className="field" required placeholder="Email*" />
                     <textarea type="text" rows={1} className="field" placeholder="General Enquiry*" />
                     <button type='submit' className="btn">Send request</button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}

export default ContactForm