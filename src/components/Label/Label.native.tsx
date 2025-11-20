import { Typography as TypographyNative } from '@/components/Typography/Typography.native';
import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Label = (props: TypographyProps) => (
  <TypographyNative variant={TypographyEnum.Label} {...props} />
);
