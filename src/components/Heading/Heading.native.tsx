import type { TypographyProps } from '@/components/types';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';
import { Typography as TypographyEnum } from '@/theme/tokens';

type HeadingProps = TypographyProps & { level?: 1 | 2 | 3 };

const { H1, H2, H3 } = TypographyEnum;

export const Heading = ({ level = 1, ...rest }: HeadingProps) => {
  const variant = [H1, H2, H3][level - 1];

  return <TypographyNative variant={variant} {...rest} />;
};
