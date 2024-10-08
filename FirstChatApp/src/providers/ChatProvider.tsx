//responsible for connecting user and render the overlay and chat from home layout
import { StreamChat } from 'stream-chat';
import { PropsWithChildren, useEffect, useState } from "react";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { ActivityIndicator } from 'react-native';


const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY ?? '');//from getstream dashboard
// console.log(process.env.EXPO_PUBLIC_STREAM_API_KEY);//testing
export default function ChatProvider({ children }: PropsWithChildren) {

    //want to render only when user is connected
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {
        const connect = async () => {
            await client.connectUser(
                {
                    id: 'jlahey',
                    name: 'Jim Lahey',
                    image: 'https://i.imgur.com/fR9Jz14.png',
                },
                // 'user_token', //i disabled it in my dashboard
                client.devToken('jlahey')//developer token
            );
            setIsReady(true);
            //creating channel using channel id [run it once only]
            //   const channel = client.channel('messaging', 'the_park', {
            //     name: 'The Park',
            //   });
            //   await channel.watch(); //in dashboard under explorer, u can see the channels (if its there, comment the code)
        };
        connect();

        //clean up function to clear connection
        return () => {
            client.disconnectUser();
            setIsReady(false);
        };
    }, []);

    if (!isReady) {
        return <ActivityIndicator/>//keeps loading
    }

    return (

        <OverlayProvider>
            <Chat client={client}>
                {children}
            </Chat>
        </OverlayProvider>

    )
}