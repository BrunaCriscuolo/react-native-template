import { Button } from '@components/form';
import { Divider, Space, Typography } from '@components/ui';
import { useAuth } from '@hooks/useAuth/context';
import { ThemeContext } from '@hooks/useTheme/context';
import i18n from '@i18n/locales';
import React, { useContext } from 'react';

const HomeScreen = () => {
  const { logout } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <Space pd="30px" jc="center" fd="column" ai="center" flex={1}>
      <Typography
        color={theme.colors.label.default}
        size="26px"
        lineHeight="40px"
      >
        {i18n.t('welcome')}
      </Typography>
      <Divider />
      <Button text={i18n.t('logout')} onPress={() => logout()} />
    </Space>
  );
};

export default HomeScreen;
