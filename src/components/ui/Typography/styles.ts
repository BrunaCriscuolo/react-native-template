import styled from 'styled-components/native';

export const Label = styled.Text`
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ size }) => size};
  color: #000;
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  ${({ margin }) => margin && { margin: margin }};
  ${({ numberOfLines }) => numberOfLines && { numberOfLines: numberOfLines }};
  ${({ fontFamily }) => fontFamily && { 'font-family': fontFamily }};
`;
