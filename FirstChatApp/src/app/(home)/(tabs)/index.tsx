import {Text} from 'react-native'
import { useState } from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo'
import { router } from 'expo-router';
// import { Channel as ChannelType } from 'stream-chat';

export default function MainTabScreen(){
    const [channel, setChannel] = useState();

    
    //will render list of channels
    return(
        // <Text>Main Tab</Text>
        <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)}/>//get the channel, go to the channel cid(completeID from getstream)
    )
}