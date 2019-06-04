import React from "react";
import styled from "styled-components";

import { device, zIndex } from "@/constants/styles";

interface IProps {
  children: React.ReactElement;
  isShowing: boolean;
}

export default (props: IProps) => {
  return props.isShowing ? (
    <>
      <Wrapper isShowing={props.isShowing}>{props.children}</Wrapper>
      <BackGround isShowing={props.isShowing} />
    </>
  ) : null;
};

const Wrapper = styled.div<{ isShowing: boolean }>`
  width: 60vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: white;
  transition: opacity ease 500ms;
  position: relative;
  z-index: ${zIndex.MODAL};

  @media ${device.mobile} {
    height: 60vh;
  }
`;

const BackGround = styled.div<{ isShowing: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: ${props => (props.isShowing ? 0.4 : 0)};
  transition: opacity ease 500ms;
`;
