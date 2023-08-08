import { View, TouchableOpacity, Text } from "react-native";

import { ButtonSheet } from "./styles";
const BaseButton = () => (
  <TouchableOpacity onPress={() => {}}>
    <View style={ButtonSheet.button as any}>
      <Text style={ButtonSheet.label as any}>Sign in</Text>
    </View>
  </TouchableOpacity>
);

export default BaseButton;
