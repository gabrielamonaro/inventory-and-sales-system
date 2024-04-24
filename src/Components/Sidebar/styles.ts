import { Link } from "@chakra-ui/react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 250px;
  background-color: white;
  z-index: 999;
  position: absolute;

  transition: 200ms;
  box-shadow: 1px 0px 10px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    font-size: 10px;
    color: black;
    margin-left: 12px;
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
