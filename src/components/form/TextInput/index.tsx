import React from 'react';
import { ActivityIndicator, TextInputProps } from 'react-native';
import { Container, InputGroup, InputText, LabelError } from './styles';

interface TextInputComponent extends TextInputProps {
  loading?: boolean;
  error?: any;
}

const TextInput = ({ loading, error, ...rest }: TextInputComponent) => {
  return (
    <Container>
      <InputGroup>
        <InputText
          placeholderTextColor="#8B959A"
          maxFontSizeMultiplier={1}
          {...rest}
        />
        {loading && (
          <ActivityIndicator color="#DB3EB1" style={{ marginLeft: -14 }} />
        )}
      </InputGroup>
      {!!error && <LabelError>{error}</LabelError>}
    </Container>
  );
};

export { TextInput };

