import { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "../themes/dark";
import light from "../themes/light";

function Theme() {
  const [theme, setTheme] = useState(dark);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={dark}>
      <h6>Theme</h6>
    </ThemeProvider>
  );
}
export default Theme;
