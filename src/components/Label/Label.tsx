import { Typography } from '@/components/Typography';
import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Label: React.FC<TypographyProps> = (props) => (
  <Typography variant={TypographyEnum.Label} {...props} />
);
