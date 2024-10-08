import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1, //This will make the view grow to fill the remaining space.
      flexDirection: "row", // THis will make the containers flex horizontally.
      flexDirection: "column-reverse",
      flexDirection: "row-reverse",
      
    }}>

      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }}></View>

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }}></View>

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }}></View>

    </View>
  );

}