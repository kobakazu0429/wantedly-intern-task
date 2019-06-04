import React from "react";
import styled from "styled-components";

import { color, device } from "@/constants/styles";
import RootContext from "@/utils/Contexts/RootContext";

import RectangleButton from "@/components/atoms/Buttons/RectangleButton";

interface IProps {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  toggleModal: () => void;
}

export default (props: IProps) => {
  const rootStore = React.useContext(RootContext);
  const { todoStore } = rootStore;

  const [value, setValue] = React.useState("");
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const data = e.target.value;
      setValue(data);
    },
    []
  );

  const addTodo = React.useCallback(() => {
    if (!value) return;
    todoStore.addTodo(value);
    setValue("");
  }, [value]);

  return (
    <Wrapper>
      <InputLabel htmlFor="ToDoInput">
        <Input
          type="text"
          id="ToDoInput"
          placeholder="&nbsp;"
          value={value}
          onChange={handleChange}
        />
        <Label>ToDo Text Here</Label>
        <Border />
      </InputLabel>

      <Buttons>
        <RectangleButton onClick={props.handleCloseModal!}>
          キャンセルする
        </RectangleButton>
        <RectangleButton onClick={addTodo}>登録する</RectangleButton>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
`;

const InputLabel = styled.label`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  border-bottom: 2px solid ${color.LIGHT_GRAY};
  color: ${color.GRAY};
  transition: all 0.15s ease;
  &:not(:placeholder-shown) + span {
    color: ${color.GRAY};
    transform: translateY(-26px) scale(0.75);
  }
  &:focus {
    background: none;
    outline: none;
  }
  &:focus + span {
    color: ${color.BLUE};
    transform: translateY(-26px) scale(0.75);
  }
  &:focus + span + .border {
    transform: scaleX(1);
  }
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: ${color.GRAY};
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: ${color.GRAY};
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    margin-top: 20px;
    margin-left: 20px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    & > button {
      margin: 10px 0;
    }
  }
`;
