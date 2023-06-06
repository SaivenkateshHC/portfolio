import React from 'react'
import './AboutSection.scss'
import { SectionWrapper } from '@/components/common/SectionWrapper/SectionWrapper.styled'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled'

import {useMediaQuery} from 'react-responsive'

function AboutSection() {
const isDesktopOrLaptop = useMediaQuery({maxWidth:'1224px'})

let componentConstant
if(isDesktopOrLaptop){
  componentConstant={
    boxHeightA:"40",
    boxWidthA:"40"
  }
}else{
  componentConstant={
    boxHeightA:"24",
    boxWidthA:"24"
  }
}

  return (
    <div className={"aboutSection"}>
       <SectionWrapper height={'full'}>
      
        <ParallaxBanner style={{ aspectRatio: '2 / 1' ,height:'100%'}}>
         
          <ParallaxBannerLayer translateY={["1px","2px"]} style={{inset:"auto 1px 0 auto",position:'relative'}}  speed={100} >
            <img src='/assets/second-section-gradient.png'
            alt='background-gradient'  className={"backgroundGradient"}/>
             
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