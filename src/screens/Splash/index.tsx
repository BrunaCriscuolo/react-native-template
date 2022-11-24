import SplashLogo from '@assets/images/logo.png';
import { useAuth } from '@hooks/useAuth';
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
  const { user } = useAuth()
  const navigation = useNavigation();
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

  async function startApp() {
    if (user) {
      return;
    }
    return navigation.navigate('Login');
  }

  useEffect(() => {
    SplashLogoAnimation.value = withTiming(
      90,
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
        <LogoImage source={SplashLogo}  />
      </Animated.View>
      <Animated.View style={SplashWordsStyle}>
        <SplashTitle>Template RN Levva</SplashTitle>
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
