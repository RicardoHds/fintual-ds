import type { Color, Typography } from '@/theme/tokens';

export type TypographyProps = {
  children: React.ReactNode;
  variant?: Typography;
  color?: Color;
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  numberOfLines?: number;
  style?: React.CSSProperties;
};
