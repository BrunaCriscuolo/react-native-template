import React, { ReactNode } from 'react';

import { AlignItensTypes, JustifyContentTypes } from '@utils/types';

import { Container } from './styles';

type ContainerPageProps = {
  children: ReactNode;
  pd?: string;
  jc?: JustifyContentTypes;
  ai?: AlignItensTypes;
};

const ContainerPage = ({
  children,
  pd = '0 20px',
  jc = 'center',
  ai = 'center',
}: ContainerPageProps) => (
  <Container pd={pd} jc={jc} ai={ai}>
    {children}
  </Container>
);

export { ContainerPage };
