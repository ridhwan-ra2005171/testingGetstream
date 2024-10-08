import UserListItem from "@/src/components/UserListItem";
import { supabase } from "@/src/lib/supabase";
import { useAuth } from "@/src/providers/AuthProvider";
import { useEffect, useState } from "react";
// import { FlatList } from "react-native-gesture-handler";
import { Text, FlatList } from "react-native";


export default function UsersScreen(){
    const [users, setUsers] = useState([] as any);
    const {user} = useAuth();

    //will read all the users from supabase (except its owner)
    useEffect(() => {
        
        const fetchUsers = async () => {
            let { data: profiles, error } = await supabase.from('profiles').select('*')
            .not('id', 'eq', user?.id);
        
        setUsers([profiles]);
        
        
        }
        fetchUsers();
    }, [])
    // console.log("users fetched:",users);
    // const fullnames = users.flat().map((user) => user.full_name);
    // console.log("usersFullnames fetched:", fullnames);
    
    //will render list of users
    return(

        <FlatList
            data={users.flat()}
            contentContainerStyle={{gap:5}}
            renderItem={({item, index}) => <UserListItem user={item}/>}
        />
        
    //  <Text>Users</Text>

    );
}