import {Text} from 'react-native'
import { useState } from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo'
import { router } from 'expo-router';
import { useAuth } from '@/src/providers/AuthProvider';
// import { Channel as ChannelType } from 'stream-chat';

export default function MainTabScreen(){
    // const [channel, setChannel] = useState();
    const {user} = useAuth();
    //we want to only filter the channels the user.ID is part of
    
    //will render list of channels
    return(
        // <Text>Main Tab</Text>
        <ChannelList 
        filters={{ members: { $in: [user?.id ?? ''] }} }
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
        />//get the channel, go to the channel cid(completeID from getstream)
    )
}