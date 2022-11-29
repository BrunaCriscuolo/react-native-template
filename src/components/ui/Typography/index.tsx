import React from 'react';

import {
  EllipsizeModeTypes,
  TextAlignTypes,
  TextDecorationTypes,
  TextTranformTypes,
} from '@utils/types';

import { Label } from './styles';

type TypographyProps = {
  children: String;
  color?: String; 
  size?: String; 
  lineHeight?: String; 
  fontFamily?: String; 
  margin?: String;
  letterSpacing?: String;
  mr?: String;
  mt?: String;
  ml?: String;
  mb?: String;
  textTransform?: TextTranformTypes;
  textAlign?: TextAlignTypes;
  textDecoration?: TextDecorationTypes;
  ellipsizeMode?: EllipsizeModeTypes;
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
    numberOfLines={numberOfLines}
  >
    {children}
  </Label>
);

export { Typography };
