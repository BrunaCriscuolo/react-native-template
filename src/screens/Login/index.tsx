import { Button, TextInput } from '@components/form';
import { Divider } from '@components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';
import i18n from '@i18n/locales';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Container, Subtitle, Title } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required(i18n.t('invalidMail'))
    .email(i18n.t('invalidMail'))
    .matches(/^[a-z0-9@._-]+$/g, i18n.t('invalidMail')),
  password: Yup.string().required(i18n.t('invalidPassword')),
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
      <Title>{i18n.t('welcome')}</Title>
      <Subtitle>{i18n.t('access')}</Subtitle>
      <Divider />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={i18n.t('placeholderMail')}
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
            placeholder={i18n.t('placeholderPassword')}
            textContentType="oneTimeCode"
            autoCorrect={false}
            secureTextEntry
            error={errors?.password && errors?.password?.message}
          />
        )}
      />
      <Divider />
      <Button
        text={i18n.t('login')}
        onPress={handleSubmit(handleLogin)}
        loading={isLoading}
      />
    </Container>
  );
};

export default LoginScreen;
