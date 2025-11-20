import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';

export const Overline = (props: TypographyProps) => (
  <TypographyNative
    variant={TypographyEnum.Overline}
    style={{ textTransform: 'uppercase' }}
    {...props}
  />
);
