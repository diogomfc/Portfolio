import React from "react";
import Image from "next/image";
import { Container } from "./styled";

import IconGit from "../../assets/icon-git.svg";
import IconLinkdin from "../../assets/icon-linkdin.svg";
import IconFacebook from "../../assets/Icon-Facebook.svg";
import IconInsta from "../../assets/Icon-Insta.svg";
import IconTwitter from "../../assets/Icon-Twitter.svg";
import BackgroundAnimation from "../BackGroundAnimation/BackgroundAnimation";

const CardProfile = () => {
  return (
    <Container>
      <div className="card-profile-background">
        <BackgroundAnimation />
      </div>
      <div className="card-profile-name">
        <h1 className="color-green">Diogo</h1>
        <h1>Silva</h1>
      </div>
      <div className="card-profile-git">
        <a href="https://github.com/">
          <Image src={IconGit} alt="Icon Git" />
          <h1>Diogomfc</h1>
        </a>
      </div>
      <div className="card-profile-sociais">
        <a href="https://github.com/">
          <Image src={IconLinkdin} alt="Icon Git" />
        </a>
        <a href="https://github.com/">
          <Image src={IconFacebook} alt="Icon Git" />
        </a>
        <a href="https://github.com/">
          <Image src={IconInsta} alt="Icon Git" />
        </a>
        <a href="https://github.com/">
          <Image src={IconTwitter} alt="Icon Git" />
        </a>
      </div>
      <div className="card-profile-contact">
        <h1>Barueri - SP</h1>
        <a href="diogosilvamfc@gmail.com">
          <h1>diogosilvamfc@gmail.com</h1>
        </a>
        <h1>11 - 98110-1705</h1>
      </div>
      <div className="card-profile-button">
        <button type="submit">Curriculum</button>
        <button type="submit">Projetos</button>
      </div>
    </Container>
  );
};

export default CardProfile;
