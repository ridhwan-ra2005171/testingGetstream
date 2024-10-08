import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'


type AuthContextType = {
    session: Session | null
    user: User | null
}
const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null
})


export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)

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

    return (


        <AuthContext.Provider value={{ session, user: session?.user ?? null }}>
            {children}
        </AuthContext.Provider>


    )

}

//we can import these in the auth layout
export const useAuth = ()=> useContext(AuthContext)