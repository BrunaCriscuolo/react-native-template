import styled from 'styled-components/native'

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme: {colors: fonts}}) => fonts.primary};
  margin: ${({margin}) => margin};
`