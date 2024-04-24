import React from "react";
import { Container } from "./styles";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const ButtonsGroup: React.FC = () => (
  <Container>
    <Menu>
      <MenuButton
        color="white"
        backgroundColor="coral"
        p={4}
        borderRadius={"4px"}
      >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem
          color="white"
          backgroundColor="coral"
          p={4}
          borderRadius={"4px"}
          marginBottom={"4px"}
          textAlign="center"
        >
          Criar
        </MenuItem>
        <MenuItem
          color="white"
          backgroundColor="coral"
          p={4}
          borderRadius={"4px"}
          marginBottom={"4px"}
          textAlign="center"
        >
          Editar
        </MenuItem>
        <MenuItem
          color="white"
          backgroundColor="coral"
          p={4}
          borderRadius={"4px"}
          marginBottom={"4px"}
          textAlign="center"
        >
          Excluir
        </MenuItem>
      </MenuList>
    </Menu>
  </Container>
);

export default ButtonsGroup;
