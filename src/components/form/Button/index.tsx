import React from 'react';
import { ActivityIndicator } from 'react-native';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { BorderlessBtn, ButtonText, Container } from './styles';

interface ButtonProps extends BorderlessButtonProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
}

const Button = ({ text, loading, onPress, ...rest }: ButtonProps) => {
  return (
    <Container>
      <BorderlessBtn {...rest} onPress={() => onPress()}>
        {loading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <ButtonText>{text}</ButtonText>
        )}
      </BorderlessBtn>
    </Container>
  );
};

export { Button };

