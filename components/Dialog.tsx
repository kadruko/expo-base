import {
  Button,
  ButtonProps,
  PanningProvider,
  Dialog as RNDialog,
  Text,
  View,
} from 'react-native-ui-lib';

export type DialogProps = {
  title: string;
  message?: string;
  children?: React.ReactNode;
  visible: boolean;
  onDismiss: () => void;
  buttons?: ButtonProps[];
};

export default function Dialog({
  title,
  message,
  children,
  visible,
  onDismiss,
  buttons,
}: DialogProps) {
  return (
    <RNDialog
      visible={visible}
      onDismiss={() => {
        onDismiss();
      }}
      panDirection={PanningProvider.Directions.DOWN}
    >
      <View
        padding-20
        gap-10
        style={{ backgroundColor: 'white', borderRadius: 10 }}
      >
        <Text text60>{title}</Text>

        {message !== undefined && <Text text80>{message}</Text>}
        {children !== undefined && children}

        <View row center height={50} gap-5>
          <View flex />
          {buttons?.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </View>
      </View>
    </RNDialog>
  );
}
