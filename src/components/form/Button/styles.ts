import styled from 'styled-components/native';
import { Button as Btn } from 'native-base';

export const Container = styled.View`
  width: 100%;
  margin: 4px 0;
`;

export const Button = styled(Btn)`
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary[50]};
`;
