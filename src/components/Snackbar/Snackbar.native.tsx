import { Color } from '@/theme/tokens';
import React, { useEffect } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import type { SnackbarProps } from './types';

export const Snackbar: React.FC<SnackbarProps> = ({
  visible,
  message,
  variant = 'info',
  duration = 3000,
}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, opacity]);

  const background = {
    success: Color.Success,
    error: Color.Danger,
    info: Color.TextPrimary,
  }[variant];

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: background, opacity }]}
    >
      <Text style={{ color: Color.TextInverse }}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: '50%',
    transform: [{ translateX: -100 }],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 200,
  },
});
