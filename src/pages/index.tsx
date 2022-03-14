import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/globals";
import { Container } from "../styles/styled";

import dark from "../themes/dark";
import light from "../themes/light";

import Header from "../components/Header";
import CardProfile from "../components/CardProfile";
import Layout from "../layout";

export default function Home() {
  const [theme, setTheme] = useState(dark);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          {/* <Header onChangeTheme={onChangeTheme} /> */}
          <Layout />
        </Container>
      </ThemeProvider>
    </>
  );
}
