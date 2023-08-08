import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "@src/screens/auth/login";
export default function Entry() {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
}
