import { AntDesign } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { LoginSheet, socialIcons } from "./style";

interface Props {
  type: "login" | "sign-up";
}

const SocialAuth = (props: Props) => {
  return (
    <View style={LoginSheet.socialContainer}>
      <Text style={LoginSheet.onContinue as any}>or continue with</Text>
      <View style={socialIcons.container}>
        <TouchableOpacity style={socialIcons.touchableContainer as any}>
          <AntDesign name="google" style={socialIcons.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={socialIcons.touchableContainer as any}>
          <AntDesign name="apple1" style={socialIcons.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={socialIcons.signUp}>
          Don&apos;t have an account?{" "}
          <Text style={socialIcons.signUpHighlight}>Sign up</Text>{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialAuth;
