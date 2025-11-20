import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { Color } from '@/theme/tokens';
import { useTheme } from '@/theme/ThemeProvider';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  full?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  disabled,
  full,
  style,
}) => {
  const { palette } = useTheme();

  const background = {
    primary: palette[Color.TextPrimary],
    secondary: palette[Color.TextSecondary],
    outline: 'transparent',
  }[variant];

  const borderColor = {
    outline: palette[Color.TextPrimary],
    primary: 'transparent',
    secondary: 'transparent',
  }[variant];

  const textColor =
    variant === 'outline' ? palette[Color.TextPrimary] : palette[Color.TextInverse];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: background,
          borderColor,
          width: full ? '100%' : undefined,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  label: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
