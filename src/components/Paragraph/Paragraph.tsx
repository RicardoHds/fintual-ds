import type { TypographyProps } from '@/components/types';
import { Typography } from '@/components/Typography';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Paragraph: React.FC<TypographyProps> = (props) => (
  <Typography
    variant={TypographyEnum.BodyMd}
    style={{ lineHeight: '28px', marginBottom: '1rem' }}
    {...props}
  />
);
