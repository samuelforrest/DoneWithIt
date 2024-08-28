import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text,
  Alert,
  Image,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Dimensions, 
  SafeAreaView 
} from 'react-native';



export default function App() {

  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "50%",
        height: 70,
      }}
      ></View>
    </SafeAreaView>
  
    )
}


const styles = StyleSheet.create({
  container: {
    // The view  is flexible, it will grow to fill the entire screen
    flex: 1,
    // Same kinda colours in CSS
    backgroundColor: 'lightskyblue',

    //danger


  },
});
