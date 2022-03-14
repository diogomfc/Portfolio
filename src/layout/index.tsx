import { useState } from "react";
import CardProfile from "../components/CardProfile";
import Resume from "../components/Resume";
import Projects from "../components/Projects";

import { Container, Content, LefContent, RightContent } from "./styled";

function Layout() {
  const [onClickButton, setOnClickButton] = useState(true);

  return (
    <Container>
      <Content>
        <LefContent>
          <CardProfile
            onClickButton={() => {
              onClickButton ? setOnClickButton(false) : setOnClickButton(true);
            }}
          >
            {onClickButton ? "Projetos" : "Sobre"}
          </CardProfile>
        </LefContent>
        <RightContent>{onClickButton ? <Resume /> : <Projects />}</RightContent>
      </Content>
      <div className="footer">
        <h1>2021 Diogo Silva</h1>
      </div>
    </Container>
  );
}

export default Layout;
