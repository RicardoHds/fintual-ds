import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';

export const Paragraph = (props: TypographyProps) => (
  <TypographyNative
    variant={TypographyEnum.BodyMd}
    style={{ lineHeight: 28, marginBottom: 12 }}
    {...props}
  />
);
