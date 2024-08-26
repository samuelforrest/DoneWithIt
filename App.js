import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// View -> UIView

export default function App() {

  // Remove this before we release the Application
  console.log("App Executed! Success, Sam");

  return (
    <View style={styles.container}>
      <Text>Welcome to Sam's React Native Application</Text>
      <StatusBar style="auto" />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
