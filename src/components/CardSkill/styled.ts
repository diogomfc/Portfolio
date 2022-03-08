import styled, { keyframes } from "styled-components";

interface IProps{
  color: string;
}

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


export const Container = styled.div<IProps>`
 animation: ${animate} .8s;
 display:flex;
 align-items: center;
 justify-content: flex-start;
  background: ${props => props.color};
 //background: linear-gradient(90deg, #2492DC 0%, rgba(80, 80, 89, 0) 100%);
 border-radius: 6px 0px 0px 6px;
 padding: 10px;
 
 .card-skill-image{
  display:flex;
  align-items: center;
  justify-content:center;
 }

 .card-skills-title{
  display:grid;
  justify-content:flex-start;
  padding-left: 3px;
 
   
   h1{
    color: #fff;
    font-size: 18px;
   }
   p{ 
    color: #fff;
    font-size: 14px;
   }
 }
 
`