// Global site data. Import from anywhere with `import { ... } from "../config"`.

export const SITE_TITLE = 'Franz-Aurel Huber';
export const SITE_DESCRIPTION = 'My Portfolio';

/** daisyUI themes wired up to the header toggle. Kept in sync with `global.css`. */
export const THEMES = {
  dark: 'business',
  light: 'autumn',
} as const;

/** Theme used for the server-rendered markup, before the client restores a stored choice. */
export const DEFAULT_THEME = THEMES.dark;
