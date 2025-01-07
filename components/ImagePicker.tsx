import { Feather } from '@expo/vector-icons';
import {
  CameraType,
  ImagePickerAsset,
  ImagePickerOptions,
  ImagePickerResult,
  launchCameraAsync,
  launchImageLibraryAsync
} from 'expo-image-picker';
import { useState } from 'react';
import { Avatar, TouchableOpacity, View } from 'react-native-ui-lib';
import ActionSheet from './ActionSheet';

interface ImagePickerProps {
  imageUri?: string;
  onChange: (asset: ImagePickerAsset) => Promise<void>;
  onError: (error: string) => void;
}

const PICKER_OPTIONS: ImagePickerOptions = {
  mediaTypes: 'images',
  aspect: [1, 1],
  allowsEditing: true,
  quality: 0.1,
  base64: true,
  cameraType: CameraType.back,
};

export default function ImagePicker({
  imageUri,
  onChange,
  onError,
}: ImagePickerProps) {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  const handlePickerResult = async ({
    assets,
    canceled,
  }: ImagePickerResult) => {
    const [image] = assets || [];
    if (canceled || !image) return;
    const { fileSize, height, width, mimeType, base64 } = image;

    if (!fileSize || !mimeType || !base64 || !height || !width) {
      onError('Invalid image');
      return;
    }

    // 1MB
    if (fileSize > 1000000) {
      onError('Image is too large');
      return;
    }

    await onChange(image);
  };

  const openCameraPicker = async () => {
    const result = await launchCameraAsync(PICKER_OPTIONS);
    await handlePickerResult(result);
  };

  const openGalleryPicker = async () => {
    const result = await launchImageLibraryAsync(PICKER_OPTIONS);
    await handlePickerResult(result);
  };

  return (
    <View>
      {imageUri ? (
        <Avatar
          source={{ uri: imageUri }}
          size={100}
          onPress={() => {
            setActionSheetVisible(true);
          }}
        />
      ) : (
        <TouchableOpacity
          style={{ height: 100, width: 100 }}
          bg-grey60
          center
          br100
          onPress={() => {
            setActionSheetVisible(true);
          }}
        >
          <Feather name="camera" size={40} color={'grey'} />
        </TouchableOpacity>
      )}

      <ActionSheet
        title={'Select Image from'}
        onDismiss={() => {
          setActionSheetVisible(false);
        }}
        visible={actionSheetVisible}
        options={[
          {
            label: 'Camera',
            onPress: () => {
              setActionSheetVisible(false);
              openCameraPicker();
            },
            iconSource: () => (
              <Feather name="camera" size={20} color={'black'} />
            ),
          },
          {
            label: 'Gallery',
            onPress: () => {
              setActionSheetVisible(false);
              openGalleryPicker();
            },
            iconSource: () => (
              <Feather name="image" size={20} color={'black'} />
            ),
          },
        ]}
      />
    </View>
  );
}
