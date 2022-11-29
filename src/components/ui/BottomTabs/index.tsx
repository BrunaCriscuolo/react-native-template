import Feather from '@expo/vector-icons/Feather';
import React, { useContext } from 'react';

import { ThemeContext } from '@hooks/theme/context';

import { ActiveLine, BottomTabsContent, Container } from './styles';
import { tupleStrUnd } from '@shared/utils/types';

export enum TabKeys {
  HOME = 0,
  CALENDAR = 1,
  CONTACTS = 2,
  TICKETS = 3,
}

const bottomTabsTypes = tupleStrUnd('home', 'calendar', 'contacts', 'news');
type BottomTabsTypes = typeof bottomTabsTypes[number];

type BottomTabsProps = {
  icons?: BottomTabsTypes;
  focused: boolean;
};


const BottomTabs = ({ icons, focused }: BottomTabsProps) => {
  const {
    theme: {
      colors: { fonts },
    },
  } = useContext(ThemeContext);

  function setIcon() {
    switch (icons) {
      case 'home':
        return 'home';
      case 'calendar':
        return 'calendar';
      case 'contacts':
        return 'book';
      case 'news':
        return 'search';
    }
  }

  return (
    <Container>
      <BottomTabsContent>
        {focused && <ActiveLine />}
        <Feather name={setIcon()} size={26} color={fonts.primary} />
      </BottomTabsContent>
    </Container>
  );
};

export { BottomTabs };
