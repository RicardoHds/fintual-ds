import type { TypographyProps } from '@/components/types';
import { Typography } from '@/components/Typography';
import { Typography as TypographyEnum } from '@/theme/tokens';

type HeadingProps = TypographyProps & { level?: 1 | 2 | 3 };

const { H1, H2, H3 } = TypographyEnum;

export const Heading: React.FC<HeadingProps> = ({ level = 1, ...rest }) => {
  const variant = [H1, H2, H3][level - 1];

  return <Typography variant={variant} {...rest} />;
};
