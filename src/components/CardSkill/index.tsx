import { Container } from "./styled";
import IconReactjs from "../../assets/IconReactjs.svg";
import Image from "next/image";

interface ICardSkill {
  color: string;
  img: string;
  title: string;
  subtitle: string;
}

function CardSkill(props: ICardSkill) {
  return (
    <Container color={props.color}>
      <div className="card-skill-image">
        <Image src={props.img} alt="Ícone ReactJS" />
      </div>
      <div className="card-skills-title">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </Container>
  );
}

export default CardSkill;
