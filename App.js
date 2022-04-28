import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import AppLoading from "expo-app-loading";
import Index from "./screens/Index";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/Quicksand-Regular.ttf"),
    Bold: require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Index />
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  );
}
