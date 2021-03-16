import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="hero-image">
          <img src={ content.image } alt=""  />
        </div>
    <div className="row">
    
      <div className="twelve columns">

        <div className="hero-text">
          <h1 className="responsive-headline animated fadeInUp">{ content.headline }<span>{content.subheadline}</span></h1>
          <p className="animated fadeInUp">{ content.body }</p>
        </div>

        <div className="buttons animated fadeInUp">
          {/* <AnchorLink className="button trial animated shake" to={ content.button1.to }>{ content.button1.label }</AnchorLink> */}
          <AnchorLink className="button learn-more" to={ content.button2.to }>{ content.button2.label }</AnchorLink>
        </div>

        
      </div>
    </div>
  </section>
)
