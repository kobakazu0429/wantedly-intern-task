import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from "@/components/pages/Home";

export default () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Container>
);

const Container = styled.div`
  padding-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
