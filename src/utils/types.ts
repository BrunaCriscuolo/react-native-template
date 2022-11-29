import { tupleString } from 'src/shared/utils/types/types';

const justifyContentTypes = tupleString(
  'center',
  'flex-start',
  'flex-end',
  'space-between'
);
export type JustifyContentTypes = typeof justifyContentTypes[number];

const alignItensTypes = tupleString('center', 'flex-start', 'flex-end');
export type AlignItensTypes = typeof alignItensTypes[number];

const textTranformTypes = tupleString(
  'capitalize',
  'lowercase',
  'uppercase',
  'none'
);
export type TextTranformTypes = typeof textTranformTypes[number];

const textAlignTypes = tupleString('center', 'justify', 'left');
export type TextAlignTypes = typeof textAlignTypes[number];

const textDecorationTypes = tupleString('underline', 'none');
export type TextDecorationTypes = typeof textDecorationTypes[number];

const ellipsizeModeTypes = tupleString('head', 'middle', 'tail', 'clip');
export type EllipsizeModeTypes = typeof ellipsizeModeTypes[number];
