import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ButtonComponent, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

const Button = ({ text, loading, ...rest }: ButtonProps) => {
  return (
    <ButtonComponent {...rest}>
      {loading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </ButtonComponent>
  );
};

export { Button };

