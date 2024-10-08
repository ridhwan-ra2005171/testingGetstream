import { Stack, Slot } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import AuthProvider from "../providers/AuthProvider";


//define global providers
//we render the authProvider here

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