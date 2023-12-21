import { theme } from '@src/styles';

type DefaultTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
