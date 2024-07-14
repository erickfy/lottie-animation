import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require('./work.json')}
          autoPlay
          loop
          style={{flex: 1}}
        />
      </View>
      <Text style={styles.resetButton}>Reset</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width * 0.9,
  },
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    textAlign: 'center',
  },
});