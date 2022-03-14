import CardSkill from "../CardSkill";
import { Container } from "./styled";

import IconReactJs from "../../assets/IconReactjs.svg";
import IconReactNative from "../../assets/IconReactjs.svg";
import IconNodeJs from "../../assets/IconNodes.svg";
import IconNextJs from "../../assets/IconNext.svg";
import IconJava from "../../assets/IconJs.svg";
import IconTScript from "../../assets/IconTs.svg";
import IconCss from "../../assets/IconCss.svg";
import IconHtml from "../../assets/iconHtml.svg";
import IconGit from "../../assets/IconGIt.svg";

function Resume() {
  return (
    <Container>
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
          Olá, sou desenvolvedor <b>full stack</b> com foco em frontend.
          Apaixonado por programação e família. Com uma mente curiosa sempre
          aberto para novas descobertas.
        </p>
      </div>
      <div className="formacao">
        <h1>Formação</h1>
        <strong>Análise e desenvolvimento de sistema</strong>
        <p>UNINOVE - Universidade Nove de Julho - Cursando </p>
        <strong>Front-end em React js</strong>
        <p>Labenu - Concluído - 2021</p>
      </div>
      <div className="habilidades">
        <h1>Minhas habilidades</h1>
        <div className="habilidades-skills">
          <CardSkill
            color="linear-gradient(90deg, #2492DC 0%, rgba(80, 80, 89, 0) 100%)"
            img={IconReactJs}
            title="REACTJS"
            subtitle="Front-end"
          />
          <CardSkill
            color="linear-gradient(90deg, #4763FF 0%, rgba(80, 80, 89, 0) 47.73%)"
            img={IconReactNative}
            title="REACT NATIVE"
            subtitle="Mobile"
          />
          <CardSkill
            color="linear-gradient(90deg, #82B441 0%, rgba(80, 80, 89, 0) 51.9%)"
            img={IconNodeJs}
            title="NODEJS"
            subtitle="Back-end"
          />
          <CardSkill
            color="linear-gradient(90deg, #505059 0%, rgba(80, 80, 89, 0) 100%)"
            img={IconNextJs}
            title="NEXTJS"
            subtitle="Front-end"
          />
          <CardSkill
            color="linear-gradient(90deg, #61DAFB 0%, rgba(80, 80, 89, 0) 100%)"
            img={IconTScript}
            title="TYPE SCRIPT"
            subtitle="Linguagem"
          />
          <CardSkill
            color="linear-gradient(90deg, #1572B6 0%, rgba(80, 80, 89, 0) 100%)"
            img={IconCss}
            title="CSS3"
            subtitle="Estilização"
          />
          <CardSkill
            color="linear-gradient(90deg, #F7DF1E 0%, rgba(80, 80, 89, 0) 100%)"
            img={IconJava}
            title="JSCRIPT"
            subtitle="Linguagem"
          />
          <CardSkill
            color="linear-gradient(90.04deg, #EA785B 0.03%, rgba(80, 80, 89, 0) 116.37%)"
            img={IconHtml}
            title="HTML5"
            subtitle="Linguagem"
          />
          <CardSkill
            color="linear-gradient(90deg, #303C42 86.8%, rgba(80, 80, 89, 0) 100%)"
            img={IconGit}
            title="GIT"
            subtitle="versionamento"
          />
        </div>
      </div>
    </Container>
  );
}

export default Resume;
