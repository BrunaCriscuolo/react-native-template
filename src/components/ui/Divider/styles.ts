import styled from 'styled-components/native';

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({
    theme: {
      colors: { divider },
    },
  }) => divider.default};
  margin: ${({ mg }) => mg};
`;
