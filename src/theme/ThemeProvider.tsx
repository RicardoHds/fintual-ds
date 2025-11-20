import type React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { lightPalette, darkPalette, typography, type Palette } from './tokens';

type ThemeMode = 'light' | 'dark' | 'system';

export type Theme = {
  mode: ThemeMode;
  palette: Palette;
  typography: typeof typography;
  setMode: (mode: ThemeMode) => void;
};

const getSystemMode = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  try {
    const { Appearance } = require('react-native');
    return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({
  children,
  mode: initialMode = 'light',
}: {
  children: React.ReactNode;
  mode?: ThemeMode;
}) => {
  // TODO: persist the theme mode in the local storage
  const [mode, setMode] = useState<ThemeMode>(
    initialMode === 'system' ? getSystemMode() : initialMode
  );

  useEffect(() => {
    // Web switch the theme mode based on the system preference listener
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => setMode(mq.matches ? 'dark' : 'light');
      mq.addEventListener('change', handler);

      return () => mq.removeEventListener('change', handler);
    }

    // React Native switch the theme mode based on the system preference listener
    try {
      const { Appearance } = require('react-native');
      const sub = Appearance.addChangeListener(
        ({ colorScheme }: { colorScheme: ThemeMode }) => {
          setMode(colorScheme === 'dark' ? 'dark' : 'light');
        }
      );
      return () => sub.remove();
    } catch {
      console.error('Error adding appearance change listener');
    }
  }, []);

  const palette = mode === 'dark' ? darkPalette : lightPalette;

  const value = useMemo(() => {
    return {
      mode,
      palette,
      typography,
      setMode,
    };
  }, [mode, palette]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
};
