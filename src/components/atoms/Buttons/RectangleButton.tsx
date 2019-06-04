import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

interface IProps {
  InnerComponents: React.ReactNode | HTMLElement | string;
  onClick: () => void;
}

export default (props: IProps) => (
  <Button onClick={props.onClick}>{props.InnerComponents}</Button>
);

const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: ${color.LIGHT_BLUE};
  border: solid 2px ${color.LIGHT_BLUE};
  border-radius: 3px;
  transition: 0.4s;
  &:hover {
    background: ${color.LIGHT_BLUE};
    color: white;
  }
`;
