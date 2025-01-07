import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, ButtonProps } from 'react-native-ui-lib';
import ActionSheet from './ActionSheet';

interface OptionsActionSheetButtonProps {
  options: ButtonProps[];
}

export default function OptionsActionSheetButton({
  options,
}: OptionsActionSheetButtonProps) {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <>
      <Button
        iconSource={() => (
          <Feather name="more-vertical" size={24} color={'black'} />
        )}
        padding-10
        backgroundColor="transparent"
        onPress={() => {
          setActionSheetVisible(true);
        }}
      />
      <ActionSheet
        title={'Options'}
        onDismiss={() => {
          setActionSheetVisible(false);
        }}
        visible={actionSheetVisible}
        options={options}
      />
    </>
  );
}
