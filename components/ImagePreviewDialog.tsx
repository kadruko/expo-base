import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Dialog, Image, PanningProvider } from 'react-native-ui-lib';

interface ImagePreviewDialogProps {
  source: ImageSourcePropType;
  visible: boolean;
  onDismiss: () => void;
}

export default function ImagePreviewDialog({
  source,
  visible,
  onDismiss,
}: ImagePreviewDialogProps) {
  return (
    <Dialog
      visible={visible}
      onDismiss={() => {
        onDismiss();
      }}
      panDirection={PanningProvider.Directions.DOWN}
      containerStyle={styles.dialog}
    >
      <Image source={source} style={styles.image} />
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialog: {
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
