import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,
  TouchableHighlight, TouchableWithoutFeedback, View, SafeAreaView } from 'react-native';


// View -> UIView

export default function App() {


  console.log(require("./assets/favicon.png"))

  const handlePress = () => console.log("Text pressed!")

  // Remove this before we release the Application
  console.log("App Executed! Success, Sam!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Welcome to Sam's React Native Application</Text>
      <StatusBar style="auto" />
      
      <Image source={require("./assets/favicon.png")}></Image>
      <TouchableHighlight onPress={() => console.log("Image Tapped!")}>

      <Image blurRadius={3}
        fadeDuration={1000}
        source={{
        width: 200,
        height: 200,
        uri: "https://picsum.photos/200/200"}}></Image>

      </TouchableHighlight>
    
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    // The view is flexible, it will grow to fill the entire screen
    flex: 1,
    // Same kinda colours in CSS
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
