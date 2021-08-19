import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// View -> UIView
export default function App() {
  let x = 1;
  console.log('app executed');

  const handlepress = () => {
    console.log('Text Presssed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlepress}>
        Hello React Native- really really long text. To see what happenswd
        asdfasdf asdf asdf asdf asdf
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
