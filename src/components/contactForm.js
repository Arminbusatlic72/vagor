import React from "react";

const ContactForm = () => {
  return (
    <form
      className="contact_form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

     
        <label>
          <input
            className="input"
            placeholder="Vaše ime"
            type="text"
            name="name"
            required
          />
        </label>
      
        <label>
          <input
            className="input"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
        </label>
     

     
        <label>
          <textarea
            className="input"
            placeholder="Vaša poruka"
            type="text"
            name="message"
          />
        </label>
    
      
        <input
          className="btn"
          type="submit"
          value="Pošaljite poruku"
        />
     
    </form>
  );
};
export default ContactForm;