import styled, { keyframes } from "styled-components";

const animate = keyframes`
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
   display:flex;
   align-items: center;
   justify-content: center;
   
  
.svg-content{
   animation: ${animate} 10s;
   position: absolute;
   width: 100%;
   height: 100%;  
}
.avatar-content{
  position: relative;
  animation: ${animate} .5s;
}

`