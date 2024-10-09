import { useAuth } from "@/src/providers/AuthProvider";
import ChatProvider from "@/src/providers/ChatProvider";
import { Redirect, Stack } from "expo-router";
import React, { } from "react";





//define global providers
export default function RootLayout() {

    //if there is no user, redirect to login
    const { user } = useAuth();
    if (!user) {
        return (
            <Redirect href={"/(auth)/login/"} />
        );
    }

    return (

        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="channel" options={{ headerShown: false }} />
            </Stack>
        </ChatProvider>
    );
}