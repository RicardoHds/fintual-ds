import { Platform } from 'react-native';
import type { TypographyProps } from '@/components/types';
import { Typography as TypographyEnum } from '@/theme/tokens';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';

export const Code: React.FC<TypographyProps> = (props) => (
  <TypographyNative
    variant={TypographyEnum.Code}
    style={{
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      backgroundColor: '#EEE',
      padding: 4,
      borderRadius: 4,
    }}
    {...props}
  />
);
