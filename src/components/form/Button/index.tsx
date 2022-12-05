import { ThemeContext } from '@hooks/theme/context';
import { IButtonProps } from 'native-base';
import React, { useContext } from 'react';
import { Container, Button as Btn } from './styles';

interface ButtonProps extends IButtonProps {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <Btn
        {...rest}
        _text={{
          color: '#FFF',
        }}
        borderWidth={1}
        borderStyle="solid"
        borderRadius={12}
        borderColor="#FF0000"
        theme={theme}
      >
        {text}
      </Btn>
    </Container>
  );
};

export { Button };
