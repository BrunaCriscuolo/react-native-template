import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const BottomTabsContent = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ActiveLine = styled.View`
  width: 50px;
  height: 2px;
  background-color: ${({theme: {colors: fonts}}) => fonts.primary};
  margin-top: -4px;
  margin-bottom: 8px;
`;
