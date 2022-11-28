import styled from 'styled-components/native';

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Subtitle = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 18px;
  text-align: center;
  font-family: ${({theme}) => theme.FONTS.LIGHT};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
`;