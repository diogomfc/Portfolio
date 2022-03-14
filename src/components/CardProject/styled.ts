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

export const Container = styled.div`
`

export const Content = styled.div`

`

export const CardProjects = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16rem 3rem 3rem 1fr;

  align-items: center;

  background: #212121;
  border-radius: .6rem; 
  border: 1px solid #333333;

  cursor: pointer;

  @media (max-width: 600px) {
    grid-template-rows: 15rem 3rem 3rem 1fr;
  }

  >h1{
    display:flex;
    align-items: center;
    text-align: center;
    
    padding: 1rem 1rem 0 1rem;

    animation: ${animate} .8s;
    color: #C4C4CC;
    font-size: 1.6rem;
    font-weight: 500;
  }

  >p{
    animation: ${animate} .8s;
    color: #C4C4CC;
    font-size: 1.6rem;
    font-weight: 100;
    padding: 0 1rem 0 1rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }

  /* .project-tags{
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    gap: 1rem;

    div{ 
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: .3rem;

      color: #fff;
      background:#1E3840;
      gap: 1rem;
      border-radius: .3rem;
    }
  } */

`

