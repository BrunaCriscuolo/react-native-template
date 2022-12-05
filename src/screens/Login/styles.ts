import styled from 'styled-components/native';

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const VersionLabel = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 14px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;