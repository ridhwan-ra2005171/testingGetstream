import { Text, View, Pressable } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '../providers/AuthProvider'
import { router } from 'expo-router'

const UserListItem = ({user}: {user: any}) => {

    // console.log("user in userlistitem:", user);
    const {client} = useChatContext()
    //grab current user
    const {user: currentUser} = useAuth()
    const onPress = async ()=>{
        //start a chat with that person
        //use the client from useChatContext
        //creating configuration of the channel
        const channel = client.channel('messaging', {
            members: [currentUser?.id, user.id]
        })

        await channel.watch();//create + watch for updates
        //go to channel
        router.replace(`/(home)/channel/${channel.cid}`)
    }
    
  return (
    <Pressable
        onPress={onPress}
        style={{padding: 15, backgroundColor: 'white'}}
    >
      <Text style={{fontWeight: '600'}}>{user.full_name}</Text>
    </Pressable>
  )
}

export default UserListItem

