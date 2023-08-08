import { ScaledSheet } from "react-native-size-matters";
import theme from "@src/theme";
export const LogoSheet = ScaledSheet.create({
  container: {},

  text: { fontSize: "80@s", textAlign: "center", color: theme.Colors.primary },
});
