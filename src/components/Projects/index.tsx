import {
  Container,
  ContentCardsProjects,
  ContentDetailProjects,
} from "./styled";

import CardProject from "../CardProject";
import { projects } from "../../utils/constants";

import { useContext, useEffect, useState } from "react";
import CardProjectFull from "../CardProjectFull";
import { GlobalContext, ProfileContext } from "../../GlobalContext";

interface ICardProjectProps {
  id: number;
  image: string;
  title: string;
  tags: string[];
  description: string;
  repository?: string;
  deploy?: string;
}

function Projects() {
  const [listagemProjects, setlistagemProjects] =
    useState<ICardProjectProps[]>();

  const [projectImage, setProjectImage] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectTags, setProjectTags] = useState([]);
  const [projectDescription, setProjectDescription] = useState("");
  const [projectRepository, setProjectRepository] = useState("");
  const [projectDeploy, setProjectDeploy] = useState("");

  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    setlistagemProjects(projects);
  }, []);

  // const data = useContext(ProfileContext);
  // console.log(data);

  function ProjectPagFull(project: ICardProjectProps) {
    setProjectImage(project.image);
    setProjectTitle(project.title);
    setProjectTags(project.tags);
    setProjectDescription(project.description);
    setProjectRepository(project.repository);
    setProjectDeploy(project.deploy);

    setShowDetail(true);
  }

  return (
    <Container>
      {(showDetail && (
        <>
          <CardProjectFull
            image={projectImage}
            title={projectTitle}
            description={projectDescription}
            repository={projectRepository}
            deploy={projectDeploy}
            onOpenListProjects={() => setShowDetail(false)}
          >
            <div className="project-full-tecnologias">
              {projectTags.map((tag, key) => {
                return (
                  <div key={key} className="project-full-tags">
                    <div>{tag}</div>
                  </div>
                );
              })}
            </div>
          </CardProjectFull>
        </>
      )) || (
        <>
          <div className="projects-title">
            <h1>Projetos</h1>
          </div>
          <ContentCardsProjects>
            {listagemProjects?.map((project, key) => {
              return (
                <CardProject
                  key={key}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  onOpenCardProjectFull={() => {
                    ProjectPagFull(project);
                  }}
                >
                  <div className="project-tags">
                    {project.tags.map((tag, key) => {
                      return (
                        <div key={key}>
                          <p>{tag}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardProject>
              );
            })}
          </ContentCardsProjects>
        </>
      )}
    </Container>
  );
}

export default Projects;
