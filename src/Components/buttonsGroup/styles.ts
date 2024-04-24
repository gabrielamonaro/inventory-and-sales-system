import { Link } from "@chakra-ui/react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 200px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 150px;
  transition: 200ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px;
`;

export const ContainerOptions = styled.div`
  width: auto;
  height: 30vh;
  margin-top: 30px;

  svg {
    margin-left: 25px;
    color: black;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)<{ selected: boolean }>`
  width: auto;
  height: 50px;
  margin: 8px;
  border-radius: 6px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: lightgray;
      p,
      svg {
        color: lightcoral;
      }
    `}

  p {
    font-size: 12px;
    color: black;
    margin-left: 12px;
    font-family: "Roboto", sans-serif;
  }

  &:hover {
    cursor: pointer;
    background-color: lightgray;

    p,
    svg {
      color: lightcoral;
    }
  }
`;
