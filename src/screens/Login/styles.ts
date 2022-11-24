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
  padding: 0 20px;
`;

export const Title = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 22px;
  text-align: center;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
`;

export const Subtitle = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 18px;
  text-align: center;
  font-family: ${({theme}) => theme.FONTS.LIGHT};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
`;