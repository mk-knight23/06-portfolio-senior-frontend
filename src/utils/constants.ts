export const STORAGE_KEYS = {
  SETTINGS: 'portfolio-settings',
  STATS: 'portfolio-stats',
} as const;

export const KEYBOARD_SHORTCUTS = [
  { key: 'Ctrl + S', action: 'Save' },
  { key: 'Escape', action: 'Close Settings' },
  { key: 'H', action: 'Toggle Help' },
  { key: '?', action: 'Show Shortcuts' },
] as const;
