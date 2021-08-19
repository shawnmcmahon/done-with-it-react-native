// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

// View -> UIView
export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt('My title', 'My Message', (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
