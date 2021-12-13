import React from "react";
import { Card, Container, Input, SubmitButton, Title } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>Acessar minha conta</Title>
        <Input placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <SubmitButton>Entrar</SubmitButton>
      </Card>
    </Container>
  );
};

export default Login;
