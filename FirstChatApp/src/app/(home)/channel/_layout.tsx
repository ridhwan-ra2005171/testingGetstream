import { Stack } from "expo-router";

//will use dynamic path
export default function ChannelStack() {
    return (
        <Stack>
            <Stack.Screen name="[cid]" options={{ headerShown: false }} />

        </Stack>
    )
}