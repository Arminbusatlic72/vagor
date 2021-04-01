import React from "react"
// import { Link } from "gatsby"
import content from "../../content/pricing.yaml"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => {

  library.add(fas)

  return (
    <section id="pricing">
      <div className="row section-head">
        <h1>{ content.title }</h1>
        <h2>{ content.subtitle }</h2>
        <p>{ content.body }</p>
        <p>{ content.body1 }</p>
        <p>{ content.body2 }</p>


      </div>

      <div className="row">
      <div className="pricing-tables">
       
        <div className="row add-bottom">
          { content.plans.map((plan, index) =>
          
            <div className="twelve columns add-bottom">
              <div className="price-block">
                <h3 className="plan-price">
                  {/* <i className="fa"><FontAwesomeIcon icon={ plan.fa } /></i> */}
                  { plan.title }
                </h3>
                
                <p className="">
                  { plan.price }
                  <span>{ plan.per }</span>
                </p>
                <div className="drop-cap__wrapper">
                <p className="drop-cap">{ plan.body }</p>
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: plan.bodyHTML }}/>
                <p className="">{ plan.body1 }</p>
                <p className="">{ plan.body2 }</p>
                <p><span>{plan.body3Question}</span>
                {plan.body3}</p>
                </div>
                
                
                <footer className="plan-sign-up">
                  {/* <Link className="button" to={ plan.signup.to }>
                    { plan.signup.label }
                  </Link> */}
                </footer>
              </div>
            </div>
            
          )
          }
          </div>
        </div>
      </div>
    </section>
  )
}
