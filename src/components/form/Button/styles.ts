import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 120px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const BorderlessBtn = styled(BorderlessButton)`
  min-width: 120px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 16px;
`;
