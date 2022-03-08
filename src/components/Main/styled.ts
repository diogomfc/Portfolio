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
  padding: 15px;

  background: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
  border-radius: 6px;
   
   .sobre{
     h1{
      animation: ${animate} .5s;
       color: #35C559;
       font-size: 30px;
     }
     p{
      animation: ${animate} .8s;
      padding-top: 5px;
      color: #fff;
      font-size: 24px;
     }
   }

   .formacao{
     display:grid;
     padding-bottom: 5px;
    h1{
      animation: ${animate} .5s;
       color: #35C559;
       font-size: 30px;
       padding-top: 10px;
     }
    strong{ 
      animation: ${animate} .8s;
      color: #fff; 
      font-size: 24px;
      padding-top: 5px;
    }

    p{
      animation: ${animate} .8s;
      color: #C4C4CC;
      font-size: 24px;
     }
     span{
      animation: ${animate} .8s;
      padding-bottom: 5px;
      font-size: 24px;
      color: #C4C4CC;
     }
   }

   .habilidades{
      >h1{
       animation: ${animate} .5s;
       padding-bottom: 15px;
       color: #35C559;
       font-size: 30px;
     
     }
     .habilidades-skills{
       display:grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-template-rows: 1fr;
       justify-content: space-between;
       align-items: center;
       
       gap: 25px
     }

     @media (max-width: 600px) {
      .habilidades-skills{
       display:grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr;
       justify-content: space-between;
       gap: 10px;
      }
     }
   }
` 
