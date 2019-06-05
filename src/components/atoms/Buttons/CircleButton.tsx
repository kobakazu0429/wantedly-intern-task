import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

interface IProps {
  children: React.ReactNode | HTMLElement | string;
  onClick: () => void;
}

export default (props: IProps) => (
  <Button onClick={props.onClick}>{props.children}</Button>
);

const Button = styled.button`
  display: block;
  width: 56px;
  height: 56px;
  background: ${color.RED};
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  font-size: 18px;
  color: white;
  line-height: 56px;
  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;
