import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import content from "../../content/features.yaml"

export default () => (

  <section id='features'>
    {content.map((value, index) => {

      let pos, imagepos
      if (index%2 === 0){
        pos = "right"
        imagepos = "left"
      }else{
        pos = "left"
        imagepos = "right"
      }

      let media
      if (value.image){
        media = ( <img src={ value.image } alt="" /> )
      } else if (value.video) {
        media = (
            <div className="fluid-video-wrapper">
              <iframe
                title="video"
                src={ value.video}
                width="500" height="500" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                >
              </iframe>
            </div>
        )
      }

      return(
        <div className={ 'row feature ' + value.name }>
          <div className={ 'six columns ' + pos }>
            <h3>{ value.title }</h3>
            <h4>{ value.subTitle }</h4>
            <p>{ value.body }</p>
          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={ 'six columns feature-media ' + imagepos }
            >
            { media }
          </ScrollAnimation>
       </div>
     )
   })}
  </section>
)
