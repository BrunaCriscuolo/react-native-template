import styled from 'styled-components/native';

export const Label = styled.Text`
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || theme.LINEHEIGHT.MEDIUM};
  font-family: ${({ theme, fontFamily }) => fontFamily || theme.FONTS.REGULAR};
  font-size: ${({ theme, size }) => size || theme.FONTSIZE.MEDIUM};
  color: ${({ color, theme }) => color || theme.COLORS.PRIMARY};
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
`;
