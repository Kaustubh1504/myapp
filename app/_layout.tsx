import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="homeCards/sniperbot"
          options={{}}
        />

        <Stack.Screen
          name="homeCards/copytrade"
          options={{}}
        />
        <Stack.Screen
          name="homeCards/transfer"
          options={{}}
        />
        <Stack.Screen
          name="homeCards/monitor"
          options={{}}
        />
        <Stack.Screen
          name="homeCards/affiliate"
          options={{}}
        />
        <Stack.Screen
          name="homeCards/linkaccount"
          options={{}}
        />

      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;