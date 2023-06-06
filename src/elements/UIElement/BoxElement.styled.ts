import styled from 'styled-components';
interface propsInterface {
    height:string,
    width:string,
    color:string
}
const BoxElement = styled.div.attrs((props:propsInterface)=>({
    height: props.height,
    width:props.width,
    color:props.color
}))`
    height: ${props=>props.height}px;
    width:${props=>props.width}px;
    background-color:${props=>props.color}


`
export default BoxElement