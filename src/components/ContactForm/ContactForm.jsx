import React from 'react';
import './style.css';

function ContactForm() {
   return (
      <section className="contact" id="contact">
         <div className="containers">
            <div className="contact-box">
               <div className="left"></div>
               <div className="right">
                  <h2 className="contact-h2">Biz bilan aloqa</h2>
                  <input type="text" className="field" placeholder="Ism" />
                  <input type="date" className="field" placeholder="Vaqti" />
                  <input type="text" className="field" placeholder="Telefon" />
                  <input type="text" className="field" placeholder="Sayohatchilar soni" />
                  <button className="btn">To'lash</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactForm