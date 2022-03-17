import styled from "styled-components";


export const Container = styled.div`
  //width: 100vw;
  //height: 100vh;
  //display:flex;
  //align-items: center;

  //background: ${props => props.theme.colors.backgroundColor};
 
 
  //padding-top: 50px;
  //height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10px;

  gap: 10px;
  padding: 0 10px;

`;

export const LefContent = styled.div`
  width: 20%;
  height: 80%;
  background: ${props => props.theme.colors.lightGray}; 
`;

export const RightContent = styled.div`
  width: 80%;
  height: 80%;
  background: ${props => props.theme.colors.lightGray}; 

`;