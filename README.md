# FN Design System

Component library for React and React Native with TypeScript support.

## Installation

```bash
pnpm install fintual-ds
# or
pnpm add fintual-ds
# or
yarn add fintual-ds
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` ^19.2.0
- `react-dom` ^19.2.0 (for web)
- `react-native` ^0.82.1 (for React Native)

## Usage

### Web (React)

```tsx
import { ThemeProvider } from 'fintual-ds/theme';
import { Button, Typography } from 'fintual-ds/components';

function App() {
  return (
    <ThemeProvider mode="light">
      <Typography variant="h1">Hello World</Typography>
      <Button label="Click me" onClick={() => console.log('clicked')} />
    </ThemeProvider>
  );
}
```

### React Native

```tsx
import { ThemeProvider } from 'fintual-ds/theme';
import { Button, Typography } from 'fintual-ds/components/native';

function App() {
  return (
    <ThemeProvider mode="light">
      <Typography variant="h1">Hello World</Typography>
      <Button label="Click me" onPress={() => console.log('pressed')} />
    </ThemeProvider>
  );
}
```

## Components

### Structure
The components are divided between React and React Native. We have exported separately the components for React Native to prevent errors and unnecessary bundle size on React Web or vice versa.

### Web Components
- `Button` - Button component with variants (primary, secondary, outline)
- `Input` - Input field component
- `Typography` - Typography component with multiple variants
- `Link` - Link component
- `Snackbar` - Snackbar notification component
- `Caption`, `Code`, `Heading`, `Label`, `Overline`, `Paragraph`, `Text` - Text components

### React Native Components
All web components are also available for React Native with the same API, imported from `fintual-ds/components/native`.

## Theme

The design system includes a theme system with light and dark modes:

```tsx
import { ThemeProvider, useTheme } from 'fintual-ds/theme';

// Use the theme
function MyComponent() {
  const { palette, typography } = useTheme();
  // Access colors: palette[Color.TextPrimary]
  // Access typography: typography[Typography.H1]
}
```

## Exports

- `fintual-ds` - Main entry point
- `fintual-ds/components` - Web components
- `fintual-ds/components/native` - React Native components
- `fintual-ds/theme` - Theme provider and tokens
- `fintual-ds/utils` - Utility functions

## TODO
- Improve Palette colors (explore Tailwind)
- Add Storybook for component documentation
- Verify compatibility on React Native
- Publish the package

## LLMs
The components was created with some help and adjusted with my preferences and corrections. [Heres is the LLMs](https://chatgpt.com/share/6920e5b2-1190-8013-8e32-f978bcaf97c6)


