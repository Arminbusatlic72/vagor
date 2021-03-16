import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import ContactForm from './contactForm'

import content from '../../content/contact.yaml'

export default () => (
  <section id="subscribe">
    <div className="row section-head">
      <div className="twelve columns">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
    </div>
  </div>

  <div className="row">
    <div className="twelve columns">
      
             <div className="clear">
               <ScrollAnimation
                 animateIn="fadeInRightBig"
                 animateOnce={true}
               >
                  <ContactForm/>
                 
               </ScrollAnimation>
             </div>

           
         </div>

         <p><small>{ content.small }</small></p>

       </div>

    

   </section>
)
