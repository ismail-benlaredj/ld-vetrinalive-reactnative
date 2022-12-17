import palette from './palette';
import { extendTheme } from 'native-base';
import components from './overrideComponents';

export const customTheme = extendTheme({
    ...palette,
    components,
    config: {
        initialColorMode: 'light',
    },
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType { }
}
