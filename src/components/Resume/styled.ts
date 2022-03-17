import styled,{keyframes} from "styled-components";

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


export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  background: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
  border-radius:.6rem;
   
   .sobre{
     h1{
      animation: ${animate} .5s;
       color: #35C559;
       font-size: 3rem;
     }
     p{
      animation: ${animate} .8s;
      //padding-top: .5rem;
      color: #C4C4CC;
      font-size: 2.4rem;
      font-weight: 100;
     }
   }

   .formacao{
     display:grid;
     padding-bottom: .5rem;
    h1{
      animation: ${animate} .5s;
       color: #35C559;
       font-size: 3rem;
       padding-top: .5rem
     }
    strong{ 
      animation: ${animate} .8s;
      color: #C4C4CC; 
      font-size: 2.4rem;
      //padding-top: .5rem;
    }

    p{
      animation: ${animate} .8s;
      color: #C4C4CC;
      font-size: 2.4rem;
      font-weight: 100;
     }
   }

   .habilidades{
      >h1{
       animation: ${animate} .5s;
       padding-bottom: 1.5rem;
       color: #35C559;
       font-size: 3rem;
     
     }
     .habilidades-skills{
       display:grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-template-rows: 1fr;
       justify-content: space-between;
       align-items: center;
       
       gap: 2.5rem;
     }

     @media (max-width: 600px) {
      .habilidades-skills{
       display:grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr;
       justify-content: space-between;
       gap: 1rem;
      }
     }
   }
` 
