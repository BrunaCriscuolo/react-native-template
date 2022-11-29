import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: ${({jc}) => jc};
  align-items: ${({ai}) => ai};
  padding: ${({pd}) => pd};
`;