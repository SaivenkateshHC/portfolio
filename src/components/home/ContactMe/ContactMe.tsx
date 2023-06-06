import React from 'react'
import Image from 'next/image'
import { SectionWrapper } from '../../common/SectionWrapper/SectionWrapper.styled';
import './ContactMe.scss'

//assets 
import LinkedInIcon from '../../../../public/assets/linkedin.png';
import githubIcon from '../../../../public/assets/github.png';
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled';
import { Typography } from '@/elements/Typography/Typography.styled';

const ContactMe = () => {
    return (
        <div className='contact-me'>
            <SectionWrapper height="full">
                <ContainerWrapper>
                    <div className='m-auto'>

                        <div className='d-flex flex-lg-row flex-column '>
                            <div className='ContactMeCard d-flex flex-column justify-content-center p-3'>
                                <Typography font="League Spartan"
                                    className='mb-1 fst-lg-normal fst-italic'
                                    sizeDesktop="42"
                                    sizeMobile="28"
                                    weightDesktop="700"
                                    weightMobile="700"
                                    color="white"
                                >Contact Me</Typography>
                                <Typography font="League Spartan"
                                    className='fst-italic'
                                    sizeDesktop="42"
                                    sizeMobile="28"
                                    weightDesktop="700"
                                    weightMobile="700"
                                    color="white"
                                >Let's get in touch</Typography>
                                <Typography font="Nunito Sans"
                                    className='mb-0'
                                    sizeDesktop="18"
                                    sizeMobile="16"
                                    weightDesktop="400"
                                    weightMobile="400"
                                    color="white"
                                >Share your thoughts and Feedbacks.  </Typography>
                            </div>
                            <div className='d-flex flex-column w-100 gap-4 justify-content-center align-item-center px-4'>
                                <div className='d-flex align-items justify-content-center gap-2 contact-button'>
                                    <p>LinkedIn</p>
                                    <Image src={LinkedInIcon} alt='linkedIn' width={24} height={24} />
                                </div>
                                <div className='d-flex align-items justify-content-center gap-2 contact-button'>
                                    <p>Github</p>
                                    <Image src={githubIcon} alt='linkedIn' width={24} height={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerWrapper>
            </SectionWrapper>
        </div>
    )
}

export default ContactMe