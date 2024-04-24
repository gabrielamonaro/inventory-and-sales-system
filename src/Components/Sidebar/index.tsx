import React from "react";
import { LiaUserTieSolid } from "react-icons/lia";
import { Container, LinkStyled, ContainerOptions } from "./styles";
import { CiBoxes } from "react-icons/ci";
import { PiShirtFoldedLight, PiUsersThree } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface ISidebarProps {
  selected: "sales" | "stock" | "products" | "partners" | "custmers";
}
const Sidebar: React.FC<ISidebarProps> = ({ selected }) => (
  <Container>
    <ContainerOptions>
      <LinkStyled
        href="./"
        _hover={{ textDecoration: "none" }}
        selected={selected === "sales"}
      >
        <HiOutlineShoppingBag size={30} />
        <p>Vendas</p>
      </LinkStyled>
      <LinkStyled
        href="./stock"
        _hover={{ textDecoration: "none" }}
        selected={selected === "stock"}
      >
        <CiBoxes size={30} />
        <p>Estoque</p>
      </LinkStyled>
      <LinkStyled
        href="./products"
        _hover={{ textDecoration: "none" }}
        selected={selected === "products"}
      >
        <PiShirtFoldedLight size={30} />
        <p>Produtos</p>
      </LinkStyled>
      <LinkStyled
        href="./customers"
        _hover={{ textDecoration: "none" }}
        selected={selected === "custmers"}
      >
        <PiUsersThree size={30} />
        <p>Clientes</p>
      </LinkStyled>
      <LinkStyled
        href="./partners"
        _hover={{ textDecoration: "none" }}
        selected={selected === "partners"}
      >
        <LiaUserTieSolid size={30} />
        <p>Parceiros</p>
      </LinkStyled>
    </ContainerOptions>
  </Container>
);

export default Sidebar;
