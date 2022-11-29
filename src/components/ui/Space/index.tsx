import React, { ReactElement } from 'react';
import { ViewProps } from 'react-native';

import { Space as S } from './styles';

import {
  AlignItensTypes,
  AlignSelfTypes,
  FlexDirectionTypes,
  FlexWrapTypes,
  JustifyContentTypes,
} from '@utils/types';

interface SpaceProps extends ViewProps {
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  zIndex?: number;
  width?: string;
  height?: string;
  pd?: string;
  flex?: number;
  fd?: FlexDirectionTypes;
  jc?: JustifyContentTypes;
  ai?: AlignItensTypes;
  as?: AlignSelfTypes;
  fw?: FlexWrapTypes;
}

export const Space = ({
  fd = 'row',
  mb = '0px',
  mt = '0px',
  mr = '0px',
  ml = '0px',
  jc = 'flex-start',
  ai = 'center',
  zIndex,
  children,
  style,
  width = 'auto',
  pd = '0px',
  as,
  flex,
  fw,
  height,
  ...rest
}: SpaceProps): ReactElement => {
  return (
    <S
      fd={fd}
      mb={mb}
      jc={jc}
      ai={ai}
      mt={mt}
      mr={mr}
      ml={ml}
      style={style}
      zIndex={zIndex}
      width={width}
      height={height}
      as={as}
      flex={flex}
      fw={fw}
      pd={pd}
      {...rest}
    >
      {children}
    </S>
  );
};
