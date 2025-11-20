export interface SnackbarProps {
  visible: boolean;
  message: string;
  variant?: 'success' | 'error' | 'info';
  duration?: number;
}
