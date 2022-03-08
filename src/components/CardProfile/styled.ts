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
  //height: 100vh;
  display:grid;
  grid-template-rows: 300px 80px 80px 80px 120px 80px;
  justify-content: center;

  background: linear-gradient(180deg, #202024 0%, #202024 0.01%, rgba(0, 0, 0, 0) 47.73%, #000000 98.78%);
  border-radius: 6px;

  

.card-profile-background{
  position:relative;
  overflow: hidden;

}

.card-profile-name{
  animation: ${animate} .5s;

  display:flex;
  text-align: center;
  justify-content: center;
  gap: 5px;

  h1{
    font-size:45px;
    color: #FFFF;
    &.color-green{
    color: #35C559;
    }
  }
}

.card-profile-git{
  animation: ${animate} .8s;
  padding: 10px;
    a{
      display:flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 15px;
        h1{
        font-weight:normal;
        color: #C4C4CC;
        font-size: 30px;
      } 
    }
}

.card-profile-sociais{
  animation: ${animate} .9s;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 10px;
}

.card-profile-contact{
  animation: ${animate} .9s;
  display:grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  h1{
    font-weight:normal;
    font-size:30px;
    color: #C4C4CC;
  }

  @media (max-width: 600px) {
       h1{
        font-size:25px;
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
      font-size: 1.6rem;
      color: #1E3840;
      background: linear-gradient(-180deg, rgba(13,184,117,1) 0%, rgba(83,208,69,1) 100%);
      border-radius: 1rem;
      padding: 10px;
      border: 0;
      height: 48px;
      width: 144px;

      transition: filter 0.2s;

      cursor: pointer;

      &:hover{
        filter: brightness(.9)
      }
    }
}
`;
