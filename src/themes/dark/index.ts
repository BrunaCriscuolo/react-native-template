import { colors } from '@shared/static';

const {
  primaryMain,
  secondaryMain,
  gray100,
  gray300,
  gray400,
  gray500,
  gray700,
  gray800,
  gray900,
} = colors;

export default {
  dark: true,
  colors: {
    primaryMain,
    secondaryMain,
    label: {
      lighter: gray400,
      light: gray500,
      default: gray700,
      dark: gray800,
      darker: gray900,
    },
    divider: {
      lighter: gray100,
      light: gray300,
      default: gray500,
      dark: gray700,
      darker: gray900,
    },
  },
};
