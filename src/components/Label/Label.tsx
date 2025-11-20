import { Typography } from '@/components/Typography';
import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Label = (props: TypographyProps) => (
  <Typography variant={TypographyEnum.Label} {...props} />
);
