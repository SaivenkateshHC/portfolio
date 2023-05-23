import styled from 'styled-components'

interface propsInterface {
    height:string,
}

export const SectionWrapper = styled.div.attrs((props:propsInterface)=> ({
    height: props.height === 'full'? '100vh': '100%',
  }))`
  width:100%;
  height:${props=>props.height}
  `