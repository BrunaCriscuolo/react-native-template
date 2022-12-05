import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  margin: 8px 0;
`
export const LabelError = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1.4,
}))`
  font-size: 12px;
  margin-left: 4px;
  color: red;
`;

