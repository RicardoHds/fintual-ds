import { type StyleProp, Text, type TextStyle } from 'react-native';
import type { TypographyProps } from '@/components/types';
import { useTheme } from '@/theme/ThemeProvider';
import { Color, Typography as TypographyEnum } from '@/theme/tokens';

export const Typography = ({
  children,
  variant = TypographyEnum.BodyMd,
  color = Color.TextPrimary,
  weight,
  align = 'left',
  numberOfLines,
  style,
}: TypographyProps) => {
  const { typography, palette } = useTheme();
  const base = typography[variant];

  const finalStyle: StyleProp<TextStyle> = {
    fontSize: base.fontSize,
    lineHeight: base.lineHeight,
    fontWeight: weight ?? (base.fontWeight as TextStyle['fontWeight']),
    color: palette[color],
    textAlign: align,
    ...(style as StyleProp<TextStyle>),
  };

  return (
    <Text numberOfLines={numberOfLines} style={finalStyle}>
      {children}
    </Text>
  );
};
