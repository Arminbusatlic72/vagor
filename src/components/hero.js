import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BackgroundImage from "./background-image"
import content from "../../content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="hero-image">
         
          <BackgroundImage/>
        </div>
    <div className="row">
    
      <div className="twelve columns">

        <div className="hero-text">
          <h1 className="responsive-headline animated fadeInUp">{ content.headline }<span>{content.subheadline}</span></h1>
          
         
        </div>

        <div className="buttons animated fadeInUp">
        <img className="stop-covid animated fadeInUp" src={content.image1}  alt=""/>
          {/* <AnchorLink className="button trial animated shake" to={ content.button1.to }>{ content.button1.label }</AnchorLink> */}
          <AnchorLink className="button learn-more" to={ content.button2.to }>{ content.button2.label }</AnchorLink>
        </div>

        
      </div>
    </div>
  </section>
)
