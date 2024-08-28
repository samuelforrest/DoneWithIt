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
      flexWrap: "wrap",
      alignContent: "center",
    }}>

      <View style={{
        backgroundColor: "dodgerblue",
        
        height: 100,
        flexBasis: 100, //flexBasis can map to width or height
        flexGrow: 1, //flexGrow is very similar to flex.
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