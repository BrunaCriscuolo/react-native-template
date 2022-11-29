import { TextInput } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  margin: 8px 0;
`

export const InputGroup = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  height: 50px;
  padding: 2px;
  background-color: #fff;
  margin: 12px 0;
  border: 1px solid #cecece;
`;

export const InputText = styled(TextInput)`
  margin-left: 8px;
  width: 90%;
  font-size: 16px;
  background-color: transparent;
`;

export const LabelError = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1.4,
}))`
  font-size: 12px;
  margin-left: 4px;
  margin-top: -8px;
`;

