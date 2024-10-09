import { Stack, Slot } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import AuthProvider from "../providers/AuthProvider";


//define global providers
//we render the authProvider here
//gesturehandler: provides a root environment for gesture handling. 
export default function App() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
      <Slot/>
      </AuthProvider>
        
    </GestureHandlerRootView>;
  }

// export default function RootLayout(){
//     return(
//         <Slot/>
//     )
// }