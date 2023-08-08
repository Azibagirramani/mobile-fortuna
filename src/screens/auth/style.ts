import { DimensionValue } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Theme from "@src/theme";
export const LoginSheet = ScaledSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
    gap: 20,
    paddingHorizontal: "30@s",
  },
  label: {
    fontSize: "20@s",
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  forgot_password: {
    fontSize: "13@s",
    fontWeight: "700",
    textAlign: "center",
    color: Theme.Colors.primary,
    fontFamily: "Bold",
  },
  socialContainer: {
    display: "flex",
    gap: 20,
  },
  onContinue: {
    fontWeight: "600",
    textAlign: "center",
  },
});
export const register = ScaledSheet.create({});

export const socialIcons = ScaledSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  touchableContainer: {
    borderColor: Theme.Colors.gray[100],
    borderWidth: 1,
    padding: "14@s" as DimensionValue,
    // borderRadius: "100%",
  },
  icon: {
    fontSize: "20@s",
  },
  signUp: {
    textAlign: "center",
    fontWeight: "600",
    color: Theme.Colors.gray[300],
    fontSize: "14@s",
  },
  signUpHighlight: {
    color: Theme.Colors.primary,
    fontWeight: "700",
  },
});
