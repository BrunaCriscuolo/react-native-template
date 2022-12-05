import * as NativeBase from 'native-base';
import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Container, LabelError } from './styles';

interface TextInputComponent extends NativeBase.IInputProps {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const TextInput = ({ error, ...rest }: TextInputComponent) => {
  return (
    <Container>
      <NativeBase.Input {...rest} />
      {!!error && <LabelError>{error}</LabelError>}
    </Container>
  );
};

export { TextInput };
