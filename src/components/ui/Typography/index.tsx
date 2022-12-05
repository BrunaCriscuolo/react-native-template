import React from 'react';
import { TextProps } from 'react-native';

import {
  TextAlignTypes,
  TextDecorationTypes,
  TextTranformTypes,
} from '@shared/utils/types/types';

import { Label } from './styles';

interface TypographyProps extends TextProps {
  color?: string;
  size?: string;
  lineHeight?: string;
  fontFamily?: string;
  margin?: string;
  letterSpacing?: string;
  mr?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  textTransform?: TextTranformTypes;
  textAlign?: TextAlignTypes;
  textDecoration?: TextDecorationTypes;
}

const Typography = ({
  fontFamily,
  color,
  margin,
  size = '12px',
  lineHeight = '22px',
  mr = '0px',
  ml = '0px',
  mt = '0px',
  mb = '0px',
  textTransform = 'none',
  textAlign = 'left',
  textDecoration = 'none',
  letterSpacing = '0px',
  ellipsizeMode = 'tail',
  children,
  ...rest
}: TypographyProps) => (
  <Label
    fontFamily={fontFamily}
    color={color}
    margin={margin}
    size={size}
    lineHeight={lineHeight}
    textTransform={textTransform}
    textAlign={textAlign}
    textDecoration={textDecoration}
    mr={mr}
    ml={ml}
    mt={mt}
    mb={mb}
    letterSpacing={letterSpacing}
    ellipsizeMode={ellipsizeMode}
    {...rest}
  >
    {children}
  </Label>
);

export { Typography };
