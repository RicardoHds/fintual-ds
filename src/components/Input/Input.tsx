import { useTheme } from '@/theme/ThemeProvider';
import { Color } from '@/theme/tokens';

export interface InputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  style,
}) => {
  const { palette } = useTheme();

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '10px 12px',
        borderRadius: 6,
        border: `1px solid ${palette[Color.Border]}`,
        backgroundColor: palette[Color.InputBackground],
        color: palette[Color.TextPrimary],
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    />
  );
};
