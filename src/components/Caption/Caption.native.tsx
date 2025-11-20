import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';

export const Caption = (props: TypographyProps) => (
  <TypographyNative variant={TypographyEnum.Caption} {...props} />
);
