import { useState } from "react";
import {
  TextInput,
  TextInputIOSProps,
  TextInputAndroidProps,
  View,
  Text,
} from "react-native";
import Theme from "@src/theme";
import { InputSheet } from "./styles";

interface Props extends TextInputAndroidProps, TextInputIOSProps {
  label?: string;
  isRequired?: boolean;
}

const Input = ({ label, isRequired, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={InputSheet.container}>
      {label && (
        <View style={InputSheet.labelContainer}>
          <Text style={InputSheet.label as any}>{label}</Text>
          <Text style={InputSheet.required}>*</Text>
        </View>
      )}
      <TextInput
        style={[
          InputSheet.textInput as any,
          isFocused && InputSheet.focusedBorder,
        ]}
        placeholder={"Email"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={Theme.Colors.gray[100]}
        {...props}
      />
    </View>
  );
};

export default Input;
