import Entry from "./src/index";
import useFont from "@src/hooks/useFonts";
export default function App() {
  const { fontsLoaded } = useFont();

  if (!fontsLoaded) return null;
  return (
    <>
      <Entry />
    </>
  );
}
