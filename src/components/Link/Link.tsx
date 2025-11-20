import { Color } from '@/theme/tokens';
import { Typography } from '@/components/Typography';
import type { TypographyProps } from '@/components/types';

type LinkProps = TypographyProps & {
  href?: string;
  underline?: boolean;
  target?: '_blank';
};

export const Link = ({ href, underline = true, style, ...rest }: LinkProps) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: underline ? 'underline' : 'none',
        ...style,
      }}
    >
      <Typography color={Color.Link} {...rest} />
    </a>
  );
};
