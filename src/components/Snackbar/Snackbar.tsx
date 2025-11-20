import { Color } from '@/theme/tokens';
import type React from 'react';
import { useEffect, useState } from 'react';
import type { SnackbarProps } from './types';
import { useTheme } from '@/theme/ThemeProvider';

export const Snackbar: React.FC<SnackbarProps> = ({
  visible,
  message,
  variant = 'info',
  duration = 3000,
}) => {
  const { palette } = useTheme();

  const [open, setOpen] = useState(visible);

  useEffect(() => {
    if (visible) {
      setOpen(true);
      const timer = setTimeout(() => setOpen(false), duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  if (!open) return null;

  const bg = {
    success: palette[Color.Success],
    error: palette[Color.Danger],
    info: palette[Color.TextPrimary],
  }[variant];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        background: bg,
        color: palette[Color.TextInverse],
        padding: '12px 16px',
        borderRadius: 8,
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      {message}
    </div>
  );
};
