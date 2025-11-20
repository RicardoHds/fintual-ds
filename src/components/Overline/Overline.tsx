import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography } from '@/components/Typography';

export const Overline: React.FC<TypographyProps> = (props) => (
  <Typography
    variant={TypographyEnum.Overline}
    style={{ textTransform: 'uppercase' }}
    {...props}
  />
);
