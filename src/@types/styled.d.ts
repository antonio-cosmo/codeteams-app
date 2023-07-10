import defaultTheme from '../themes';
import 'styled-components/native'


declare module 'styled-components/native' {
    type ThemeType = typeof defaultTheme;
    export interface DefaultTheme extends ThemeType { }
}