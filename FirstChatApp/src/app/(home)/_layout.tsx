import ChatProvider from "@/src/providers/ChatProvider";
import { Stack } from "expo-router";
import React, { } from "react";

//define global providers
export default function RootLayout() {
    return (

        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ChatProvider>
    );
}