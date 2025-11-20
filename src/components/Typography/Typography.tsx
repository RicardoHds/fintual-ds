import type React from 'react';
import type { TypographyProps } from '@/components/types';
import { useTheme } from '@/theme/ThemeProvider';
import { Color, Typography as TypographyEnum } from '@/theme/tokens';

export const Typography = ({
  children,
  variant = TypographyEnum.BodyMd,
  color = Color.TextPrimary,
  weight,
  align = 'left',
  truncate,
  style,
}: TypographyProps) => {
  const { typography, palette } = useTheme();
  const base = typography[variant];

  const finalStyle: React.CSSProperties = {
    fontSize: base.fontSize,
    lineHeight: `${base.lineHeight}px`,
    fontWeight: weight ?? base.fontWeight,
    color: palette[color],
    textAlign: align,
    whiteSpace: truncate ? 'nowrap' : undefined,
    overflow: truncate ? 'hidden' : undefined,
    textOverflow: truncate ? 'ellipsis' : undefined,
    ...style,
  };

  return <span style={finalStyle}>{children}</span>;
};
