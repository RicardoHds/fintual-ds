import { Pressable } from 'react-native';
import { Typography as TypographyNative } from '@/components/Typography/Typography.native';
import type { TypographyProps } from '@/components/types';
import { Color } from '@/theme/tokens';

type LinkProps = TypographyProps & {
  onPress?: () => void;
  underline?: boolean;
};

export const Link = ({
  onPress,
  underline = true,
  style,
  ...rest
}: LinkProps) => {
  return (
    <Pressable onPress={onPress}>
      <TypographyNative
        color={Color.Link}
        style={{
          textDecorationLine: underline ? 'underline' : 'none',
          ...style,
        }}
        {...rest}
      />
    </Pressable>
  );
};
