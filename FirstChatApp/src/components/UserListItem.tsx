import { Text, View } from 'react-native'
import React from 'react'

const UserListItem = ({user}: {user: any}) => {

    console.log("user in userlistitem:", user);
    
  return (
    <View style={{padding: 15, backgroundColor: 'white'}}>
      <Text style={{fontWeight: '600'}}>{user.full_name}</Text>
    </View>
  )
}

export default UserListItem

