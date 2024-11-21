import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

// Import your global CSS file
import "./globals.css";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
