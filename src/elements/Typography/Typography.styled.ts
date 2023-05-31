import { styled } from "styled-components";

interface propsInterface {
    font: string
    sizeDesktop: string
    sizeMobile: string
    weightDesktop: string
    weightMobile: string
    color: string
}

export const Typography = styled.p.attrs((props: propsInterface) => ({
    font: props.font,
    sizeDesktop: props.sizeDesktop,
    sizeMobile: props.sizeMobile,
    weightDesktop: props.weightDesktop,
    weightMobile: props.weightMobile,
    color: props.color,
}))`
font-family:"${props => props.font}",sans-serif;
color:${props => props.color};
 @media screen and (min-width:1224px){
    font-weight:${props => props.weightDesktop};
    font-size:${props => props.sizeDesktop}px;
 }
 @media screen and (max-width:1224px){
    font-weight:${props => props.weightMobile};
    font-size:${props => props.sizeMobile}px;
 }
    
    
 
`