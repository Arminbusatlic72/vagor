import React from "react"
import content from "../../content/call-to-action.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Table from './table'

export default () => (
  <section id="call-to-action">
    <div className="row">
      <div className="seven columns header-col">
        
        
        {/* <h1><span>Get Hosting.</span></h1> */}
        <h2><a href={ content.title.url }>{ content.title.text }</a></h2>
        <FontAwesomeIcon icon={faFileDownload}/>
        <p
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
        
        
      </div>
      <div className="five columns">
      <Table/>
      
      </div>

      {/* <div className="three columns action">
        <a href={ content.button.url } className="button">{content.button.label}</a>
      </div> */}
    </div>
  </section>
)
