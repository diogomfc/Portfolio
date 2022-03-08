import CardProfile from "../components/CardProfile";
import Main from "../components/Main";
import { Container, LefContent, RightContent } from "./styled";

function Layout() {
  return (
    <Container>
      <LefContent>
        <CardProfile />
      </LefContent>
      <RightContent>
        <Main />
      </RightContent>
      {/* <div className="footer">
        <h1>Copyright © 2021 Diogo Silva</h1>
      </div> */}
    </Container>
  );
}

export default Layout;
