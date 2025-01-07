import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ButtonProps, FloatingButton } from 'react-native-ui-lib';
import ActionSheet from './ActionSheet';

interface FloatingActionSheetButtonProps {
  title: string;
  options: ButtonProps[];
}

export default function FloatingActionSheetButton({
  title,
  options,
}: FloatingActionSheetButtonProps) {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <>
      <FloatingButton
        button={{
          iconSource: () => <Ionicons name="add" size={32} color={'white'} />,
          'padding-10': true,
          onPress: () => {
            setActionSheetVisible(true);
          },
        }}
        visible={!actionSheetVisible}
      />
      <ActionSheet
        title={title}
        onDismiss={() => {
          setActionSheetVisible(false);
        }}
        options={options}
        visible={actionSheetVisible}
      />
    </>
  );
}
