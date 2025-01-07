import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import { View } from 'react-native-ui-lib';
import { ScrollView as VirtualizedScrollView } from 'react-native-virtualized-view';

type ScrollViewProps = RNScrollViewProps & {
  hasFloatingButton?: boolean;
};

export default function ScrollView({
  hasFloatingButton,
  children,
  ...props
}: ScrollViewProps) {
  return (
    <VirtualizedScrollView style={{ flex: 1 }} {...props}>
      <View paddingB-100={hasFloatingButton}>{children}</View>
    </VirtualizedScrollView>
  );
}
