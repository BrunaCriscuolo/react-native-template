import styled from 'styled-components/native';

export const ButtonComponent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primaryMain};
  min-width: 120px;
  height: 48px;
  border-radius: 12px;
`;


export const ButtonText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 16px;
`;
