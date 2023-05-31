import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    
display: flex;
align-items:center;
justify-content:center;
height:100%;
  @media screen and (min-width:1224px){
    padding:24px;
    max-width:1224px;
    margin:auto
    
  }
  
  @media screen and (max-width:1223px){
    padding:16px;
    margin:auto
  }
`