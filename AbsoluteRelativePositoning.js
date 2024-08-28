import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1, //This will make the view grow to fill the remaining space.
      flexDirection: "row", // THis will make the containers flex horizontally.
      justifyContent: "center", // Main Axis
      alignItems: "center", // Secondary Axis
      
      alignContent: "center",
    }}>

      <View style={{
        backgroundColor: "dodgerblue",
        height: 100,
        width: 100,
        position: "relative",
      }}></View>

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        left: 20,
        top: 20, // Change relative positoning
        position: "absolute", // Gold is now positioned relative to its parent's view
      }}></View>

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
        position: "relative",
      }}></View>


    </View>
  );

}