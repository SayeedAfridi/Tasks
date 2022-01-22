export type SnackbarState = {
  visible: boolean;
  message: string;
  actionText?: string;
  actionPress?: () => void;
  color: '#f44336' | '#484848' | '#4caf50';
};

export type SnackbarPayload = {
  message: string;
  actionText?: string;
  actionPress?: () => void;
};
