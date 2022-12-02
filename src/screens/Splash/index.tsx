import SplashLogo from '@assets/images/logo.png';
import { useAuth } from '@hooks/auth/context';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Container, LogoImage, SplashTitle } from './styles';

const SplashScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const routes = navigation.getState().routeNames;
  const SplashLogoAnimation = useSharedValue(0);

  const SplashLogoStyle = useAnimatedStyle(() => {
    return {
      opacity: SplashLogoAnimation.value,
      transform: [
        {
          scale: interpolate(
            SplashLogoAnimation.value,
            [0, 15, 25, 50],
            [1.3, 1, 0.9, 0.7],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const SplashWordsStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        SplashLogoAnimation.value,
        [0, 15, 25, 50],
        [0, 0.1, 0.3, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const sleep = (milliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  async function startApp() {
    try {
      if (routes.includes('Login')) {
        await sleep(500);
        !user && navigation.navigate('Login');
      } else {
        return;
      }
    } catch (err) {}
  }

  useEffect(() => {
    SplashLogoAnimation.value = withTiming(
      50,
      {
        duration: 3500,
      },
      () => {
        'worklet';
        runOnJS(startApp)();
      }
    );
  }, []);

  return (
    <Container>
      <Animated.View style={SplashLogoStyle}>
        <LogoImage source={SplashLogo} />
      </Animated.View>
      <Animated.View style={SplashWordsStyle}>
        <SplashTitle>Template RN Levva</SplashTitle>
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
