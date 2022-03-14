import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./styled";

import IconGit from "../../assets/icon-git.svg";
import IconLinkedin from "../../assets/icon-linkedin.svg";
import IconFacebook from "../../assets/Icon-Facebook.svg";
import IconInsta from "../../assets/Icon-Insta.svg";
import IconTwitter from "../../assets/Icon-Twitter.svg";
import BackgroundAnimation from "../BackGroundAnimation/BackgroundAnimation";

const urlDownloadCurriculum =
  "https://drive.google.com/file/d/1tHPrw9I1IqfkLL9qhKI6fn3PlZTkFzjD/view?usp=sharing";

type TButton = {
  onClickButton: () => void;
  children: string;
};

function CardProfile({ onClickButton, children }: TButton) {
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
        <a href="https://github.com/diogomfc">
          <Image src={IconGit} alt="Icon Git" />
          <h1>diogomfc</h1>
        </a>
      </div>
      <div className="card-profile-sociais">
        <a href="https://github.com/diogomfc">
          <Image src={IconLinkedin} alt="Icon Git" />
        </a>
        <a href="https://www.facebook.com/">
          <Image src={IconFacebook} alt="Icon Git" />
        </a>
        <a href="https://www.instagram.com/diogomfc/">
          <Image src={IconInsta} alt="Icon Git" />
        </a>
        <a href="https://twitter.com/">
          <Image src={IconTwitter} alt="Icon Git" />
        </a>
      </div>
      <div className="card-profile-contact">
        <h1>Barueri - SP</h1>
        <a href="mailto:diogosilvamfc@gmail.com">
          <h1>diogosilvamfc@gmail.com</h1>
        </a>
        <a href="http://wa.me/55011981101705">
          <h1>11 - 98110-1705</h1>
        </a>
      </div>
      <div className="card-profile-button">
        <>
          <a
            href={urlDownloadCurriculum}
            target="blank"
            title="Download Curriculum"
          >
            Curriculum
          </a>

          <button type="button" onClick={onClickButton}>
            {children}
          </button>
        </>
      </div>
    </Container>
  );
}

export default CardProfile;
