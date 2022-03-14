import Image from "next/image";
import { ReactNode } from "react";
import { CardProjects, Container, Content } from "./styled";

interface ICardProject {
  image: string;
  title: string;
  tags?: string[];
  description: string;
  repository?: string;
  deploy?: string;
  children?: ReactNode;
  onOpenCardProjectFull: () => void;
}

function CardProject({
  image,
  title,
  tags,
  description,
  repository,
  deploy,
  onOpenCardProjectFull,
  children,
}: ICardProject) {
  return (
    <Container>
      <CardProjects onClick={onOpenCardProjectFull}>
        <Image
          layout="responsive"
          height="320px"
          width="100%"
          className="image-card-projects"
          src={image}
          alt={title}
        />
        <h1>{title}</h1>
        <p>{description}</p>

        <>{children}</>
      </CardProjects>
    </Container>
  );
}

export default CardProject;
