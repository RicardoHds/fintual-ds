import type { TypographyProps } from '@/components/types';
import { Typography } from '@/components/Typography';
import { Typography as TypographyEnum } from '@/theme/tokens';

export const Code: React.FC<TypographyProps> = (props) => (
  <Typography
    variant={TypographyEnum.Code}
    style={{
      fontFamily: 'monospace',
      background: '#EEE',
      padding: '2px 4px',
      borderRadius: 4,
    }}
    {...props}
  />
);
