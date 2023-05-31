import React from 'react'
import './ProjectSection.scss'
import { SectionWrapper } from '../../common/SectionWrapper/SectionWrapper.styled'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { projects } from '../../../utils/sampleData'
import Atropos from 'atropos/react';
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled';
import { Typography } from '@/elements/Typography/Typography.styled';


const ProjectSection = () => {
    return (
        <div className='project-section'>
            
            <SectionWrapper height='full'>
                <ContainerWrapper className='align-items-start'>
                
            <Typography font="League Spartan"
                                 className='fst-italic'
                                sizeDesktop="24"
                                sizeMobile="20"
                                weightDesktop="700"
                                weightMobile="700"
                                color="white"
                                >Projects</Typography>
                    <div className='mx-auto'>
                        <div className='d-flex flex-column justify-content-between '>
                            <div className='section-title'>
                            
                            </div>

                            <div className='project-list-wrapper'>
                                <Swiper
                                    loop={true}
                                    slidesPerView={'auto'}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination, Autoplay]}
                                // className="mySwiper"
                                >
                                    {
                                        projects.map((item, index) => {
                                            return <SwiperSlide key={index}>
                                                <div className='project-card'>
                                                    <Atropos
                                                        className="atropos-banner"
                                                        highlight={false}
                                                        onEnter={() => console.log("enter")}
                                                    >
                                                        <img
                                                            data-atropos-offset="-4.5"
                                                            src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
                                                            alt=""
                                                        />
                                                        <div className='project-name' data-atropos-offset="3">
                                                            <p >{item.name}</p>
                                                        </div>
                                                    </Atropos>
                                                    {/* image */}
                                                    {/* title */}
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>

                            
                        </div>
                    </div>
                </ContainerWrapper>
            </SectionWrapper>
        </div>
    )
}

export default ProjectSection