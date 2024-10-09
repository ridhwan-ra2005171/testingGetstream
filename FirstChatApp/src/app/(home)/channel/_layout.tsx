import { Stack } from "expo-router";
// import { useRoute } from '@react-navigation/native';

//want to display current channel that is pressed
//will use dynamic path
export default function ChannelStack() {
    // const route = useRoute();
    // const { cid } = route.params as { cid: string };
    // console.log('cid:', cid);
    

    return (
        <Stack>
            <Stack.Screen name="[cid]" options={{
                headerShown: true,
                headerTitleAlign: 'center', // Center the title
                title: 'Channel',  // TODO: Display channel name
                
            }} />
        </Stack>
    )
}