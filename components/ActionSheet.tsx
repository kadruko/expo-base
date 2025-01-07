import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import {
  ButtonProps,
  ActionSheet as RNActionSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';

interface ActionSheetProps {
  title: string;
  options: ButtonProps[];
  visible: boolean;
  onDismiss?: () => void;
}

export default function ActionSheet(props: ActionSheetProps) {
  return (
    <RNActionSheet
      cancelButtonIndex={3}
      destructiveButtonIndex={0}
      {...props}
      renderAction={(
        { label, iconSource }: ButtonProps,
        index: number,
        onOptionPress: (index: number) => void,
      ) => (
        <TouchableOpacity onPress={() => onOptionPress(index)} key={label}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            paddingV-10
            paddingH-20
          >
            {iconSource && (
              <View paddingR-10>
                {(
                  iconSource as (
                    iconStyle?: StyleProp<ImageStyle>[] | undefined,
                  ) => React.ReactNode
                )()}
              </View>
            )}
            <Text body marginL-gap text70>
              {label}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
