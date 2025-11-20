import {
  TextInput,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { Color } from '@/theme/tokens';

export interface InputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  secureTextEntry,
  disabled,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      editable={!disabled}
      style={[
        styles.input,
        {
          backgroundColor: Color.InputBackground,
          borderColor: Color.Border,
          color: Color.TextPrimary,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
  },
});
