import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



const BackgroundImage = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "hero-bcg2.jpg"}) {    
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
            
          }
    }
  `)
  
  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Vagor" />;

}
export default BackgroundImage