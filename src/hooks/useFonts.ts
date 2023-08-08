import { useFonts } from "expo-font";
const fonts = {
  Black: require("../../assets/Lato/Lato-Black.ttf"),
  Bold: require("../../assets/Lato/Lato-Bold.ttf"),
  Italic: require("../../assets/Lato/Lato-Italic.ttf"),
  Light: require("../../assets/Lato/Lato-Light.ttf"),
  Regular: require("../../assets/Lato/Lato-Regular.ttf"),
  Think: require("../../assets/Lato/Lato-Thin.ttf"),
  "Black-italic": require("../../assets/Lato/Lato-BlackItalic.ttf"),
  "Bold-italic": require("../../assets/Lato/Lato-BoldItalic.ttf"),
  "Think-Italic": require("../../assets/Lato/Lato-ThinItalic.ttf"),
  "Light-Italic": require("../../assets/Lato/Lato-LightItalic.ttf"),
};
const useFont = () => {
  const [fontsLoaded] = useFonts(fonts);

  return { fontsLoaded };
};

export default useFont;
