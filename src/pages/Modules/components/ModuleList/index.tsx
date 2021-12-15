import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Header from "../../../../components/Header";
import { Container, Flex, OptionButton, Table, Td, Th, Tr } from "./styles";

const ModulesList: React.FC = () => {
  return (
    <Container>
      <Header />
      <Flex>
        <button>Criar</button>
      </Flex>
      <Table>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Opções</Th>
        </Tr>
        <Tr>
          <Td>Alfreds Futterkiste</Td>
          <Td>Maria Anders</Td>
          <Td>
            <OptionButton>
              <BiEdit size={20} color="#fff" />
            </OptionButton>
            <OptionButton>
              <MdDeleteOutline size={22} color="#fff" />
            </OptionButton>
          </Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default ModulesList;
