import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography } from '@/components/Typography';

export const Text = (props: TypographyProps) => {
  return <Typography variant={TypographyEnum.BodyMd} {...props} />;
};
