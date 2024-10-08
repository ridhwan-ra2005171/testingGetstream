//responsible for connecting user and render the overlay and chat from home layout
import { StreamChat } from 'stream-chat';
import { PropsWithChildren, useEffect, useState } from "react";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { ActivityIndicator } from 'react-native';
import { useAuth } from './AuthProvider';
import { supabase } from '../lib/supabase';


const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY ?? '');//from getstream dashboard
// console.log(process.env.EXPO_PUBLIC_STREAM_API_KEY);//testing
export default function ChatProvider({ children }: PropsWithChildren) {

    //want to render only when user is connected
    const [isReady, setIsReady] = useState(false);
   

    //we can grab the user + profile now
    const {profile} = useAuth();

    useEffect(() => {
        if(!profile) return; //if there is no profile, return

        const connect = async () => {
            await client.connectUser(
                {
                    id: profile.id,
                    name: profile.full_name,
                    image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
                },
                // 'user_token', //i disabled it in my dashboard
                client.devToken(profile.id)//developer token
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
            //disconnect only when client is connected
            if (isReady){
                client.disconnectUser();
            }
            
            setIsReady(false);
        };
    }, [profile?.id]); //only when profile changes

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