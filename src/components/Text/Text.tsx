import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography } from '@/components/Typography';

export const Text: React.FC<TypographyProps> = (props) => {
  return <Typography variant={TypographyEnum.BodyMd} {...props} />;
};
