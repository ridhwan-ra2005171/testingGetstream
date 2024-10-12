import { Redirect } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import {StyleSheet, Text, View} from "react-native";

//will render to a redirect to login screen
export default function App() {
    return(
        <Redirect href={"/(auth)/login/"} />
        // <View style={styles.container}>
        //     <Text>Hello World</Text>
        //     <StatusBar style="auto" />
        // </View>
    )
}

// const styles= StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })