import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import { routes } from "../../../../constants/routers";
import { getAllModules } from "../../../../services/modules";
import { Container, Flex, OptionButton, Table, Td, Th, Tr } from "./styles";

const ModulesList: React.FC = () => {
  const navigation = useNavigate();
  const [modules, setModules] = useState([]);

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      setModules(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleRedirectCreate = () => {
    navigation(routes.moduleInfo);
  };

  useEffect(() => {
    handleGetAllModules();
  }, []);

  return (
    <Container>
      <Header />
      <Flex>
        <button onClick={handleRedirectCreate}>Criar</button>
      </Flex>
      <Table>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Opções</Th>
        </Tr>

        {modules?.map(({ id, name }) => (
          <Tr>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>
              <OptionButton>
                <BiEdit size={20} color="#fff" />
              </OptionButton>
              <OptionButton>
                <MdDeleteOutline size={22} color="#fff" />
              </OptionButton>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default ModulesList;
