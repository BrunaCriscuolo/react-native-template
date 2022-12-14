import { Button, TextInput } from '@components/form';
import { Divider, Space, Typography } from '@components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth/context';
import { ThemeContext } from '@hooks/useTheme/context';
import i18n from '@i18n/locales';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import * as Yup from 'yup';
import appData from '../../../app.json';
import { VersionLabel } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required(i18n.t('invalidMail'))
    .email(i18n.t('invalidMail'))
    .matches(/^[a-z0-9@._-]+$/g, i18n.t('invalidMail')),
  password: Yup.string().required(i18n.t('invalidPassword')),
});

const LoginScreen = () => {
  
  const {
    theme: { colors: { primaryMain, label } }
  } = useContext(ThemeContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const { signIn, isLoading } = useAuth();

  const handleLogin = async (form) => {
    const { email, password } = form;
    await signIn({ email, password });
  };

  return (
    <Space pd="30px" jc="center" fd="column" ai="center" flex={1}>
      <Typography color={primaryMain} size="30px" lineHeight="40px">
        {i18n.t('welcome')}
      </Typography>
      <Typography color={label.default} size="16px" lineHeight="40px">
        {i18n.t('access')}
      </Typography>
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
            variant="rounded"
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
            variant="rounded"
          />
        )}
      />
      <Divider />
      <Button
        text={i18n.t('login')}
        onPress={handleSubmit(handleLogin)}
        isLoading={isLoading}
      />
      <VersionLabel>
        {`${appData.expo.version} (${
          Platform.OS === 'ios'
            ? appData.expo.ios.buildNumber
            : appData.expo.android.versionCode
        })`}
      </VersionLabel>
    </Space>
  );
};

export default LoginScreen;
