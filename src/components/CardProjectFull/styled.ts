import styled, { keyframes } from "styled-components"


const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{     
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

const animateOpacity = keyframes`
    0%{
        opacity: 0;
    }
    50%{     
        opacity: .3;
    }
    100%{
        opacity: 1;
    }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 32rem 6rem 5rem 1fr 3rem;

  @media(max-width: 600px){
    grid-template-rows: 5rem 14rem 8rem 4rem 1fr 3rem;
  }

  padding: 1rem;
   
 .project-full-header{
   display: flex;
   justify-content: space-between;
 

  h1{
    animation: ${animate} .5s;
    color: #35C559;
    font-size: 3rem;
     }

  span{ 
    animation: ${animate} .9s;
    color: #35C559;
    font-size: 1rem;
    
    cursor: pointer;
    transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }
    
  }
 }
 .project-full-image{

  animation: ${animateOpacity} .5s;

  //background:#1455;
  border-radius: .6rem;

 }


 .project-full-titulo{
  animation: ${animateOpacity} .5s;
  padding-top: 1rem;
  color: #fff;

  @media(max-width: 600px){
    padding-top: 0;
  }
 }
 .project-full-description{
  animation: ${animateOpacity} .5s;
   h1{ 
   color: #fff;
   font-weight:100;
   }
 
 }
 .project-full-preview-deploy{
  animation: ${animateOpacity} 1.5s;
   display: flex;
   justify-content: flex-end;
   padding-top: 1rem;
   gap: 1rem;

   div{ 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 8rem;
    color: #fff;
    background:#056ADD;
    gap: 1rem;
    border-radius: .6rem;

    &.deploy{
      background:#E4A61D;
    }
   }

   transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }
 }
`

