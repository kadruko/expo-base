import { useState } from 'react';
import Dialog, { DialogProps } from './Dialog';

type ConfirmationDialogProps = DialogProps & {
  confirmText: string;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
};

export default function ConfirmationDialog({
  title,
  message,
  children,
  confirmText,
  visible,
  onCancel,
  onConfirm,
}: ConfirmationDialogProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Dialog
      visible={visible}
      onDismiss={() => {
        if (!loading) {
          onCancel();
        }
      }}
      title={title}
      message={message}
      buttons={[
        {
          label: 'Cancel',
          text80: true,
          backgroundColor: '#f0f0f0',
          color: 'black',
          disabled: loading,
          onPress: () => {
            if (!loading) {
              onCancel();
            }
          },
        },
        {
          label: confirmText,
          text80: true,
          disabled: loading,
          onPress: () => {
            if (loading) return;

            setLoading(true);
            onConfirm().finally(() => {
              setLoading(false);
            });
          },
        },
      ]}
    >
      {children}
    </Dialog>
  );
}
