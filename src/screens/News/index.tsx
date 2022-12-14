import { Space, Typography } from '@components/ui';
import { useAuth } from '@hooks/useAuth/context';
import { ThemeContext } from '@hooks/useTheme/context';
import React, { useContext } from 'react';

const NewsScreen = () => {
  const { logout } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <Space pd="30px" jc="center" fd="column" ai="center" flex={1}>
      <Typography
        color={theme.colors.label.default}
        size="26px"
        lineHeight="40px"
      >
        Search News Screen
      </Typography>
    </Space>
  );
};

export default NewsScreen;
