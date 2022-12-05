import { ThemeContext } from '@hooks/theme/context';
import * as NativeBase from 'native-base';
import React, { useContext } from 'react';
import { Container } from './styles';

interface ButtonProps extends NativeBase.IButtonProps {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <Container>
      <NativeBase.Button
        {...rest}
        _text={{
          color: colors.label.default,
        }}
        // borderWidth={1}
        // borderStyle={'solid'}
        borderRadius={12}
        borderColor={colors.primaryMain}
        bgColor={colors.primaryMain}
      >
        {text}
      </NativeBase.Button>
    </Container>
  );
};

export { Button };

