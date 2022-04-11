import { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const [userName, setUserName] = useState(null);
  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Quicksand-Regular.ttf'),
    Bold: require('./assets/fonts/Quicksand-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <PaperProvider>
      <SafeAreaProvider>
        {userName ? (
          <Home userName={userName} setUserName={setUserName} />
        ) : (
          <Login setUserName={setUserName} />
        )}
      </SafeAreaProvider>
    </PaperProvider>
  );
}
