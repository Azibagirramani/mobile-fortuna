import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "@src/components/forms/input";
import Button from "@src/components/forms/button";
import Logo from "@src/components/elements/logo";
import SocialAuth from "./socials";
import { LoginSheet } from "./style";

export default function Screen() {
  return (
    <SafeAreaView style={LoginSheet.container}>
      <View style={LoginSheet.formContainer}>
        <Logo />
        <Text style={LoginSheet.label as any}>Sign in to your account</Text>
        <View style={LoginSheet.form}>
          <Input label={"Email"} />
          <Input label={"Password"} placeholder={"Password"} />
          <Button />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={LoginSheet.forgot_password as any}>
            Forgot the password ?
          </Text>
        </TouchableOpacity>
        <SocialAuth type={"login"} />
      </View>
    </SafeAreaView>
  );
}
