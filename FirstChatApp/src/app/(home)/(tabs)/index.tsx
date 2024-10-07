import {Text} from 'react-native'
import { useState } from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo'
// import { Channel as ChannelType } from 'stream-chat';

export default function MainTabScreen(){
    const [channel, setChannel] = useState();

    if (channel){
        return(
            <Channel channel={channel}>
                <MessageList/>
                <MessageInput/>
            </Channel>
        )
    }

    return(
        // <Text>Main Tab</Text>
        <ChannelList onSelect={(channel) => setChannel(channel)}/>
    )
}