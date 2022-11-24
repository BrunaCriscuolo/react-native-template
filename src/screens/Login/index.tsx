import { Button, TextInput } from '@components/form';
import { Divider } from '@components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Container, Subtitle, Title } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('*E-mail é obrigatório')
    .email('*E-mail é inválido')
    .matches(/^[a-z0-9@._-]+$/g, '*E-mail inválido.'),
  password: Yup.string()
    .required('*Digite uma senha')
    .min(8, '*A senha precisa conter 8 dígitos')
    .test(
      'password-check',
      `*Os caracteres \\ e " não são permitidos. Selecione outro.`,
      (password) => !password?.match(/["\\"]/)
    )
    .matches(/[a-z]/, '*Uma letra minuscula')
    .matches(/[A-Z]/, '*Uma letra maiúscula')
    .matches(/[0-9]/, '*Pelo menos 1 número')
    .matches(
      /[!@¢€¥#=£$°`x¿¡•*~÷%^&*()_+\-=[\]{};':\|,.<>/?]/,
      '*Pelo menos um caractere especial'
    ),
});

const LoginScreen = () => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (form) => {
    setIsLoading(true);
    await signIn(form.email, form.password);
    setIsLoading(false);
  };

  return (
    <Container>
      <Title>Login</Title>
      <Subtitle>Digite seu usuario e clique no botão</Subtitle>
      <Divider />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Digite um e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors?.email && errors?.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Digite qualquer senha"
            textContentType="oneTimeCode"
            autoCorrect={false}
            secureTextEntry
            error={errors?.password && errors?.password?.message}
          />
        )}
      />
      <Divider />
      <Button
        text="Acessar"
        onPress={handleSubmit(handleLogin)}
        loading={isLoading}
      />
    </Container>
  );
};

export default LoginScreen;
