import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Text } from 'react-native'
import { useEffect, useState } from 'react';
import { Channel as ChannelType} from 'stream-chat'
import { MessageInput, MessageList, Channel, useChatContext } from 'stream-chat-expo';

/**
 * ChannelScreen is a component that displays a Stream Chat channel.
 *
 * It fetches the channel when the `cid` param in the URL changes and
 * displays a loading indicator until the channel is loaded.
 *
 * It uses the `useChatContext` hook to get the Stream Chat client and
 * the `useLocalSearchParams` hook to get the `cid` param from the URL.
 *
 * It displays the channel's messages with the `MessageList` component and
 * allows the user to send new messages with the `MessageInput` component.
 *
 * @returns {JSX.Element} The component that displays the channel.
 */
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

    //if channel is not null, display the messaging screen with message list and message input
    return(
        <Channel channel={channel} >
            <MessageList/>
            <MessageInput/>
        </Channel>
    );
}