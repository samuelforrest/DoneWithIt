import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, Image, Button,
  TouchableHighlight, TouchableWithoutFeedback, View, SafeAreaView } from 'react-native';


// View -> UIView

export default function App() {


  console.log(require("./assets/favicon.png"))

  const handlePress = () => console.log("Text pressed!")

  // Remove this before we release the Application
  console.log("App Executed! Success, Sam!");

  return (
    <SafeAreaView style={styles.container}>

      <Button 
      color="orange"
      title="Click Me" 
      onPress={() => console.log("Button tapped!")}/>

      <Button
      color="pink"
      title="Alert Button"
      onPress={() => alert("Button Tapped!")}/>

      <Button
        color="red"
        title="Cooler Alert Button"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress:() => console.log("No") },
          ])
        }
      />

      <Button
        color="red"
        title="Most Cool Alert Button"
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        }
      />

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

const containerStyle = { backgroundColor: "orange" };

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
