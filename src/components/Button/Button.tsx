import { Color } from '@/theme/tokens';
import { useTheme } from '@/theme/ThemeProvider';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  full?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
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

  const color =
    variant === 'outline'
      ? palette[Color.TextPrimary]
      : palette[Color.TextInverse];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        width: full ? '100%' : 'auto',
        padding: '12px 16px',
        borderRadius: 8,
        backgroundColor: background,
        border: `1px solid ${borderColor}`,
        color,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      {label}
    </button>
  );
};
