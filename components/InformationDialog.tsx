import Dialog from './Dialog';

interface InformationDialogProps {
  visible: boolean;
  title: string;
  message: string;
  onDismiss: () => void;
}

export default function InformationDialog({
  visible,
  title,
  message,
  onDismiss,
}: InformationDialogProps) {
  return (
    <Dialog
      onDismiss={onDismiss}
      title={title}
      message={message}
      visible={visible}
      buttons={[
        {
          label: 'OK',
          text80: true,
          onPress: () => {
            onDismiss();
          },
        },
      ]}
    />
  );
}
