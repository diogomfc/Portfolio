import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/globals";

import dark from "../themes/dark";
import light from "../themes/light";
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
        <>
          {/* <Header onChangeTheme={onChangeTheme} /> */}
          <Layout />
        </>
      </ThemeProvider>
    </>
  );
}
