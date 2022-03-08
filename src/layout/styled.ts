import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;

  gap: 5px;

  //width: calc(100% - 10px);
  //height: calc(100% - 10px);
  //height: 100%;

  padding: 10px;
 
  border: none;

  .footer{
    display:flex;
    justify-content: center;
    align-items: center;

    font-size: 9px;
  }


  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 }   

 
`

export const LefContent = styled.div`

`
export const RightContent = styled.div`
  
`

