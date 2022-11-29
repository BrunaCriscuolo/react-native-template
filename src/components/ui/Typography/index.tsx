import React from 'react';

import {
  EllipsizeModeVariant,
  TextAlignVariant,
  TextDecorationVariant,
  TextTranformVariant,
} from '@utils/types';

import { Label } from './styles';

type Props = {
  children: String;
  color?: String; //Como tipar isso?
  size?: String; //Como tipar isso?
  lineHeight?: String; //Como tipar isso?
  fontFamily?: String; //Como tipar isso?
  margin?: String;
  letterSpacing?: String;
  mr?: String;
  mt?: String;
  ml?: String;
  mb?: String;
  textTransform?: TextTranformVariant;
  textAlign?: TextAlignVariant;
  textDecoration?: TextDecorationVariant;
  ellipsizeMode?: EllipsizeModeVariant;
  numberOfLines?: Number;
};

const Typography = ({
  fontFamily,
  color,
  children,
  margin,
  size,
  lineHeight,
  mr = '0px',
  ml = '0px',
  mt = '0px',
  mb = '0px',
  textTransform = 'none',
  textAlign = 'left',
  textDecoration = 'none',
  letterSpacing = '0px',
  ellipsizeMode = 'tail',
  numberOfLines,
}: Props) => (
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
    numberOfLines={numberOfLines}
  >
    {children}
  </Label>
);

export { Typography };
