import { Container } from "./styled";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type headerProps = {
  onChangeTheme: () => void;
};

function Header({ onChangeTheme }: headerProps) {
  const { name, colors } = useContext(ThemeContext);

  return (
    <Container>
      <h3>Header</h3>
      <Switch
        onChange={onChangeTheme}
        checked={name === "dark"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
      />
    </Container>
  );
}

export default Header;
