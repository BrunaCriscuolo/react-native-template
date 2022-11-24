import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import enUS from './enUS';
import ptBR from './ptBR';

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  'en-US': enUS,
  'pt-BR': ptBR,
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export default i18n