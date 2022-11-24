import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { ActiveLine, BottomTabsContent, Container } from './styles';

export enum TabKeys {
  HOME = 0,
  CALENDAR = 1,
  CONTACTS = 2,
  TICKETS = 3,
}

type Props = {
  icons?: 'home' | 'calendar' | 'contacts' | 'news';
  focused: boolean;
};

const BottomTabs = ({ icons, focused }: Props) => {

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
        {focused && (
          <ActiveLine />
        )}
        <Feather name={setIcon()} size={26} color="#001F5B" />
      </BottomTabsContent>
    </Container>
  );
}

export { BottomTabs };
