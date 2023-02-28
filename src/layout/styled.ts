import styled from 'styled-components'

export const Container = styled.div`
@media (max-width: 600px) {
    padding-top: 0;
  }

@media (min-width: 600px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  border: none;
}

 .footer{
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
    color: #C4C4CC;
    font-size: 1rem;
    font-weight:100;
   }
  }
 
`
export const Content = styled.div`
  max-width: 1120px;
  max-height: 770px;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;

  gap: 5px;
  padding: 10px;
  border: none;

 @media (max-width: 600px) {
    max-height: none;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 }  
 
 @media (max-width: 420px) {
  max-height: none;
  grid-template-rows: 890px;
  gap: 20px;
 } 

 @media (max-width: 380px) {
  max-height: none;
  grid-template-rows: 740px;
  gap: 20px;
 }
`

export const LefContent = styled.div`

`
export const RightContent = styled.div`
   
`

