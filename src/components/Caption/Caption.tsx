import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography } from '@/components/Typography';

export const Caption = (props: TypographyProps) => (
  <Typography variant={TypographyEnum.Caption} {...props} />
);
