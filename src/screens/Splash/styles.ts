import styled from 'styled-components/native';

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SplashTitle = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 18px;
  text-align: center;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
  margin-top: 18px;
`;