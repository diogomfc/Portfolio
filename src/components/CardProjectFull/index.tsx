import { Container, Content } from "./styled";
import Image from "next/image";

import { ReactNode, useState } from "react";

interface ICardProjectFull {
  image: string;
  title: string;
  tags?: string[];
  description: string;
  repository?: string;
  deploy?: string;
  children?: ReactNode;
  onOpenListProjects: () => void;
}

function CardProjectFull({
  image,
  title,
  tags,
  description,
  repository,
  deploy,
  onOpenListProjects,
  children,
}: ICardProjectFull) {
  return (
    <Container>
      <Content>
        <div className="project-full-header">
          <h1>Projeto</h1>
          <span onClick={onOpenListProjects}>{"< Listar Projetos >"}</span>
        </div>
        <div className="project-full-image">
          <Image
            height="370px"
            width="720px"
            className="image-card-projects"
            src={image}
            alt={title}
          />
        </div>

        {/* Tags */}
        <>{children}</>

        <div className="project-full-titulo">
          <h1>{title}</h1>
        </div>
        <div className="project-full-description">
          <h1>{description}</h1>
        </div>
        <div className="project-full-preview-deploy">
          <a href={repository} target="blank" title={title}>
            <div>REPOSITÓRIO</div>
          </a>
          <a href={deploy} target="blank" title={title}>
            <div className="deploy">DEPLOY</div>
          </a>
        </div>
      </Content>
    </Container>
  );
}

export default CardProjectFull;
