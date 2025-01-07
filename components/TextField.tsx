import {
  TextField as TextFieldBase,
  TextFieldProps,
} from 'react-native-ui-lib';

export default function TextField({ ...props }: TextFieldProps) {
  return (
    <TextFieldBase
      floatingPlaceholder
      text70
      fieldStyle={{
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
      {...props}
    />
  );
}
