import styled, { keyframes } from "styled-components";

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
  
  display:grid;
  grid-template-rows: 30rem 8rem 8rem 8rem 10rem;
  //grid-template-rows: 300px 80px 80px 80px 120px 80px;
  justify-content: center;

  background: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
  border-radius: .6rem;

  

.card-profile-background{
  position:relative;
  overflow: hidden;

}

.card-profile-name{
  animation: ${animate} .5s;

  display:flex;
  text-align: center;
  justify-content: center;
  gap: .5rem;

  h1{
    font-size:4rem;
    color: #FFFF;
    &.color-green{
    color: #35C559;
    }
  }
}

.card-profile-git{
  animation: ${animate} .8s;
  padding: 1rem;
  display:flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }

    a{
      display:flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1.5rem;
        h1{
        font-weight:100;
        color: #C4C4CC;
        font-size: 3rem
      } 
    }
}

.card-profile-sociais{
  animation: ${animate} .9s;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem;

  a{
    transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }
  }
}

.card-profile-contact{
  animation: ${animate} .9s;
  display:grid;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 1rem;

  h1{
    font-weight:100;
    font-size:2rem;
    color: #C4C4CC;
  }

  @media (max-width: 600px) {
       h1{
        font-size:25px;
       }
    }
    
    a{
      transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }
    }
}

.card-profile-button{
  animation: ${animate} .9s;
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;

    button{
      font-size: 2rem;
      color: #1E3840;
      background: linear-gradient(-180deg, rgba(13,184,117,1) 0%, rgba(83,208,69,1) 100%);
      border-radius: 1rem;
      padding: 1rem;
      border: 0;
      height: 4.8rem;
      width: 14.4rem;

      cursor: pointer;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(.9)
      }
    }
    a{
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 2rem;
      color: #1E3840;
      background: linear-gradient(-180deg, rgba(13,184,117,1) 0%, rgba(83,208,69,1) 100%);
      border-radius: 1rem;
      padding: 1rem;
      border: 0;
      height: 4.8rem;
      width: 14.4rem;

      transition: filter 0.2s;

      cursor: pointer;

      &:hover{
        filter: brightness(.9)
      }
    }
}
`;
