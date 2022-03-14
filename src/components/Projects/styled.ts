import styled, { keyframes } from 'styled-components'


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
  width: 100%;
  height: 100%;
  padding: 0 1.5rem  1.5rem 1.5rem;

  background: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
  border-radius:.6rem;
  
  .projects-title{
    h1{
      animation: ${animate} .5s;
       color: #35C559;
       font-size: 3rem;
       padding-top: 1rem;
     }
  }
 
    //height: calc(100vh - 5rem); 
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #333333;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {   
        background-color: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
    }

  .project-full-tecnologias{
   display: flex;
   align-items: center;
   padding: .5rem 0 1rem 0;
   gap: 1rem;

   @media (max-width: 600px) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      padding: .5rem 0 1rem 0;
     }

   .project-full-tags{ 
    animation: ${animateOpacity} 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: .5rem;

    background:#3c3c3c;
    color: #fff;
    
    gap: 1rem;
    border-radius: .6rem;
  
   }
  
 }
`

export const ContentCardsProjects = styled.div`
  animation: ${animateOpacity} .9s;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;

  padding-top: 1rem;
  
      
  gap: 1rem;

  @media (max-width: 600px) {
      padding-top: 1rem;
      grid-template-columns:  1fr;
      grid-template-rows: 1fr;
     }

  /* display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      padding: 1rem 1rem 1rem 1rem; */
   
    .project-tags{
      animation: ${animateOpacity} 1s;
  
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      padding: 0 1rem 1rem 1rem;

    div{ 
      padding: .5rem;
      background:#3c3c3c;
      border-radius: .3rem;
       p{
        color: #fff;
        font-size: .9rem;
       }
    }
  }

`

export const ContentDetailProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 33rem 6rem 5rem 1fr 3rem;

  @media(max-width: 600px){
    grid-template-rows: 5rem 15rem 6rem 4rem 1fr 3rem;
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
    animation: ${animate} .5s;
    color: #fff;
    font-size: 1rem;
  }
 }

 .project-full-carrossel{
  background:#1455;
  border-radius: .6rem;
 }
 .project-full-tecnologias{
   display: flex;
   align-items: center;
   padding: .5rem 0 1rem 0;
   gap: 1rem;

  
   div{ 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 8rem;
    color: #fff;
    
     width: 3rem;
     height: 3rem;
   
    gap: 1rem;
    border-radius: .6rem;
    &.icon{
      background:#3c3c3c;
    }
   }
  
 }
 .project-full-titulo{
  padding-top: 1rem;
  color: #fff;

  @media(max-width: 600px){
    padding-top: 0;
  }
 }
 .project-full-description{
   h1{ 
   color: #fff;
   font-weight:100;
   }
 
 }
 .project-full-preview-deploy{
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
 }

`