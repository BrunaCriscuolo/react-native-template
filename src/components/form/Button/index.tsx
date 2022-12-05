import * as NativeBase from 'native-base';
import React from 'react';
import { Container } from './styles';

interface ButtonProps extends NativeBase.IButtonProps {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => (
  <Container>
    <NativeBase.Button
      {...rest}
      _text={{
        color: '#FFF',
      }}
      borderWidth={1}
      borderStyle="solid"
      borderRadius={12}
      borderColor="#FF0000"
      bgColor="#FF0000"
    >
      {text}
    </NativeBase.Button>
  </Container>
);

export { Button };
