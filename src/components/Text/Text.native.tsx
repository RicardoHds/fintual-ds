import type { TypographyProps } from '@/components/types';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Text: React.FC<TypographyProps> = (props) => {
  return <TypographyNative variant={TypographyEnum.BodyMd} {...props} />;
};
