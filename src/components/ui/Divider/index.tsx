import React from 'react';
import { Divider as D } from './styles';

type DividerProps = {
  mg?: string;
};

const Divider = ({ mg = '20px 0' }: DividerProps) => <D mg={mg}/>;

export { Divider };
