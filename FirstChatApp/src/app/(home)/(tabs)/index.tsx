import { ChannelList } from 'stream-chat-expo'
import { Link, router, Stack } from 'expo-router';
import { useAuth } from '@/src/providers/AuthProvider';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import { Channel as ChannelType } from 'stream-chat';

export default function MainTabScreen() {
    // const [channel, setChannel] = useState();
    const { user } = useAuth();
    //we want to only filter the channels the user.ID is part of

    //will render list of channels
    return (
        <>
            {/* render icon in header */}
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Link href={'/(home)/users'} asChild>

                            <FontAwesome5 name="users" size={22} color="gray" style={{ marginHorizontal: 15 }}
                            />
                        </Link>
                    )
                }} />

            <ChannelList
                filters={{ members: { $in: [user?.id ?? ''] } }}
                onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
            />
            {/* //get the channel, go to the channel cid(completeID from getstream) */}
        </>

    )
}