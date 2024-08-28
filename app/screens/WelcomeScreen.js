import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    style={styles.background}
    source={require("../assets/background.jpg")}>
    </ImageBackground>
  );
}

const styles = Stylesheet.create({

  background: {
    flex: 1 // The Image background will take up the whole screen.
  }

})

export default WelcomeScreen;