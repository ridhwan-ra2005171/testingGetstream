import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'


type AuthContextType = {
    session: Session | null
    user: User | null,
    profile: any | null,
}
const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null,
    profile: null,
})


export default function AuthProvider({ children }: PropsWithChildren) {
    //we want to keep track of the profile and session
    const [session, setSession] = useState<Session | null>(null)
    const [profile, setProfile] = useState(null);

    //fetching the session
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        //automatic update of session
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    //fetching profile only when user changes
    useEffect(() => {
        //if user is not yet authenticated
        if (!session?.user) {
            setProfile(null)//reset the profule to null
            return;
        }

        const fetchProfile = async () => {
            //can get the queries from the API docs in supabase
            let { data, error } = await supabase
                .from('profiles')
                .select("*")
                .eq('id', session?.user.id)//only grabbing same id
                .single();
        
            setProfile(data);
        }

        fetchProfile()

    }, [session?.user])

    // console.log(profile)
    return (


        <AuthContext.Provider value={{ session, user: session?.user ?? null , profile}}>
            {children}
        </AuthContext.Provider>


    )

}

//we can import these in the auth layout
export const useAuth = () => useContext(AuthContext)

function data(prevState: undefined): undefined {
    throw new Error("Function not implemented.");
}
