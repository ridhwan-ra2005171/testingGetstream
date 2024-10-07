import { Slot, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { OverlayProvider , Chat} from "stream-chat-expo";

const client = StreamChat.getInstance('a5bw3uvhgwc6');//from dashboard


//define global providers
export default function RootLayout() {

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

            //creating channel using channel id [run it once only]
            //   const channel = client.channel('messaging', 'the_park', {
            //     name: 'The Park',
            //   });
            //   await channel.watch(); //in dashboard under explorer, u can see the channels (if its there, comment the code)
        };
        connect();
    })

    return (
        <OverlayProvider>
            <Chat client={client}>
                <Slot />
            </Chat>
        </OverlayProvider>
    );
}