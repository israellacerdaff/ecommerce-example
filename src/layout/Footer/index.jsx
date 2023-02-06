import React from "react";
import {Container} from "reactstrap";
import {StyledFooter} from "./footer.styled";
import {LinkContainer} from "react-router-bootstrap";
import SocialList from "../../components/SocialList";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialList />
        <ul className="footer-links">
          <LinkContainer to={"/"}>
            <li>Home</li>
          </LinkContainer>
          <LinkContainer to={"/shop"}>
            <li>Loja</li>
          </LinkContainer>
          <LinkContainer to={"/cart"}>
            <li>Carrinho</li>
          </LinkContainer>
        </ul>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/israel-lacerda-b68489186/"
            target={"_blank"}
            rel="noreferrer"
          >
            Israel Lacerda
          </a>
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
