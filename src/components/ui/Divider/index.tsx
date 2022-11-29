import React from 'react';
import { Divider as D } from './styles';

type DividerProps = {
  margin?: string;
};

const Divider = ({ margin = '20px 0' }: DividerProps) => <D margin={margin} />;

export { Divider };
