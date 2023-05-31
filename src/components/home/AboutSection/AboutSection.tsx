import React from 'react'
import './AboutSection.scss'
import { SectionWrapper } from '@/components/common/SectionWrapper/SectionWrapper.styled'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled'
import { relative } from 'path'

function AboutSection() {
  return (
    <div className={"aboutSection"}>
       <SectionWrapper height={'full'}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' ,height:'100%'}}>
         
          <ParallaxBannerLayer translateY={["1px","2px"]} style={{inset:"auto 1px 0 auto",position:'relative'}}  speed={100} >
            <img src='/assets/second-section-gradient.png'
            alt='background-gradient'  className={"backgroundGradient"}/>
             <div className="skills-marquee mx-auto text-center">
                                <div className='skills-label'>
                                    <p>Skills</p>
                                </div>
                                <div className='skills-list-wrapper'>

                                </div>
                            </div>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-65} style={{zIndex:100}}>
          <div 
            style={{inset:0}} 
            className={"aboutUsCard position-absolute d-flex align-items-center justify-content-center"}
            >
              <h1 className="">Abut Me</h1>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
       
        </SectionWrapper>
    </div>
  )
}

export default AboutSection