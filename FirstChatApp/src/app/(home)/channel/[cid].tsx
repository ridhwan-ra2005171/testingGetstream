import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Text } from 'react-native'
import { useEffect, useState } from 'react';
import { Channel as ChannelType} from 'stream-chat'
import { MessageInput, MessageList, Channel, useChatContext } from 'stream-chat-expo';

export default function ChannelScreen(){
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const {cid} = useLocalSearchParams<{cid: string}>();

    //fetching client
    const {client} = useChatContext();

    //when id channel changes, need to fetch it, can filter by cid
    useEffect(() => {
        const fetchChannel = async () => {
            const channels = await client.queryChannels({cid : cid});
            setChannel(channels[0])
        }
        fetchChannel();
    }, [cid]);

    //if the channel is null
    if (!channel){
        return <ActivityIndicator/> //a spinner [loading]
    }

    return(
        <Channel channel={channel}>
            <MessageList/>
            <MessageInput/>
        </Channel>
    );
}