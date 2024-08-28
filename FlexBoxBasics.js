import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1, //This will make the view grow to fill the remaining space.

      
    }}>

      <View style={{
        backgroundColor: "dodgerblue",
        flex: 2, // 2 out of the 4 segments, blue takes half of the container.
      }}></View>

      <View style={{
        backgroundColor: "gold",
        flex: 1,
      }}></View>

      <View style={{
        backgroundColor: "tomato",
        flex: 1,
      }}></View>

    </View>
  );

}