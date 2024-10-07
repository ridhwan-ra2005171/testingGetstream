import { Stack, Slot } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";


//define global providers

export default function App() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot/>
    </GestureHandlerRootView>;
  }

// export default function RootLayout(){
//     return(
//         <Slot/>
//     )
// }