import React from "react";
import styled from "styled-components";
import { useObserver } from "mobx-react-lite";
import moment from "moment";

import { color } from "@/constants/styles";
import RootContext from "@/utils/Contexts/RootContext";
import { keysForSelect } from "@/stores/ToDoStore";

import Select from "@/components/atoms/Forms/Select";
import CircleButton from "@/components/atoms/Buttons/CircleButton";

interface IProps {
  handleOpenModal: () => void;
}

export default (props: IProps) => {
  const { handleOpenModal } = props;

  const rootStore = React.useContext(RootContext);
  const { todoStore } = rootStore;

  const today = moment();
  const month = today.format("MMMM");
  const date = today.format("Do");
  const day = today.format("dddd");

  return useObserver(() => (
    <Wrapper>
      <Date>
        <b>{day}</b>, {date}
      </Date>
      <Month>{month}</Month>
      <Tasks>
        <b>{todoStore.getTodos().length}</b> Tasks
      </Tasks>
      <SelectWrapper>
        <Select
          value={todoStore.filtering as any}
          onChange={todoStore.setFiltering as any}
          optionElements={keysForSelect}
        />
      </SelectWrapper>
      <CircleButtonWrapper>
        <CircleButton onClick={handleOpenModal}>
          <i className="fas fa-plus" />
        </CircleButton>
      </CircleButtonWrapper>
    </Wrapper>
  ));
};

const Wrapper = styled.header`
  width: 100%;
  height: 110px;
  background-color: ${color.ULTRA_LIGHT_GRAY};
  padding: 35px 25px 10px 25px;
  border-bottom: 1px solid ${color.LIGHT_GRAY};
  position: fixed;
`;

const Date = styled.span`
  display: block;
  color: ${color.BLUE};
  font-size: 27px;
  margin: 5px 0;
`;

const Month = styled.span`
  display: block;
  color: ${color.GRAY};
  font-size: 17px;
  margin: 5px 0;
`;

const Tasks = styled.span`
  display: block;
  color: ${color.GRAY};
  font-size: 17px;
  position: absolute;
  margin: 5px 0;
  top: 35px;
  right: 25px;
`;

const CircleButtonWrapper = styled.div`
  position: absolute;
  top: ${110 - 56 / 2}px;
  right: 30px;
`;

const SelectWrapper = styled.div`
  width: 120px;
  position: absolute;
  top: 70px;
  right: 90px;
`;
