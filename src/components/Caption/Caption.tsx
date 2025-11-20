import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography } from '@/components/Typography';

export const Caption: React.FC<TypographyProps> = (props) => (
  <Typography variant={TypographyEnum.Caption} {...props} />
);
