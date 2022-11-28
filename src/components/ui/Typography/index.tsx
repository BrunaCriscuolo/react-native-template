import {
  EllipsizeModeVariant,
  TextAlignVariant,
  TextDecorationVariant,
  TextTranformVariant,
} from '@utils/types';
import React from 'react';

import { Label } from './styles';

type Props = {
  children: String;
  color?: String; //não faço ideia de como tipar isso
  size?: String; //não faço ideia de como tipar isso
  lineHeight?: String; //não faço ideia de como tipar isso
  fontFamily?: String; //não faço ideia de como tipar isso
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
