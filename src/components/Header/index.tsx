import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routers";
import { Container, SignInButton } from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigate();
  const [textButton, setTextButton] = useState<string | any>("Entrar");

  const handleChangeTextButton = async () => {
    const res = await localStorage.getItem("token");

    if (res) {
      setTextButton("Sair");
    }
  };

  const logout = async () => {
    if (textButton === "Sair") {
      await localStorage.removeItem("token");
      navigation(routes.home);
    }
  };

  useEffect(() => {
    handleChangeTextButton();
  }, [textButton]);

  return (
    <Container>
      <a href="/">
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
        />
      </a>

      {textButton === "Sair" && (
        <>
          <Link to="/modules">
            <SignInButton>Modulos</SignInButton>
          </Link>
          <Link to="/login">
            <SignInButton>Aulas</SignInButton>
          </Link>
        </>
      )}

      <Link to="/login">
        <SignInButton onClick={logout}>{textButton}</SignInButton>
      </Link>
    </Container>
  );
};

export default Header;
