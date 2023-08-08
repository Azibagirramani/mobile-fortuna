import { ScaledSheet } from "react-native-size-matters";
import Theme from "@src/theme";

export const InputSheet = ScaledSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    gap: 10,
  },

  labelContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
  },

  label: {
    fontWeight: "700",
    fontSize: "14@s",
    fontStyle: "normal",
    color: Theme.Colors.gray[200],
    marginLeft: "20@s",
  },

  required: {
    color: "red",
  },

  textInput: {
    height: "40@s",
    borderRadius: "30@s",
    borderColor: Theme.Colors.gray[100],
    borderWidth: 1.5,
    fontWeight: "700",
    color: "red",
    width: "100%",
    paddingHorizontal: "20@s",
  },
  focusedBorder: {
    borderColor: Theme.Colors.primary,
  },
});

export const ButtonSheet = ScaledSheet.create({
  button: {
    height: "45@s",
    borderRadius: "30@s",
    backgroundColor: Theme.Colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: "14@s",
    fontWeight: "700",
    color: "white",
  },
});
