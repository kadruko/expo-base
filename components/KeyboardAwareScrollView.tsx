import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import {
  KeyboardAwareScrollView as BaseKeyboardAwareScrollView,
  View,
} from 'react-native-ui-lib';

type KeyboardAwareScrollViewProps = RNScrollViewProps & {
  hasFloatingButton?: boolean;
};

export default function KeyboardAwareScrollView({
  hasFloatingButton,
  children,
  ...props
}: KeyboardAwareScrollViewProps) {
  return (
    <BaseKeyboardAwareScrollView style={{ flex: 1 }} {...props}>
      <View paddingB-100={hasFloatingButton}>{children}</View>
    </BaseKeyboardAwareScrollView>
  );
}
