import React, { ReactNode } from 'react';

import { AlignItensVariant, JustifyContentVariant } from '@utils/types';

import { Container } from './styles';

type Props = {
  children: ReactNode;
  pd?: String;
  jc?: JustifyContentVariant;
  ai?: AlignItensVariant;
};

const ContainerPage = ({
  children,
  pd = '0 20px',
  jc = 'center',
  ai = 'center',
}: Props) => (
  <Container pd={pd} jc={jc} ai={ai}>
    {children}
  </Container>
);

export { ContainerPage };
