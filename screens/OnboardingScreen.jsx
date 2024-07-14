import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Onboarding,  } from 'react-native-app-onboard';
import LottieView from 'lottie-react-native';
// import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export const OnboardingScreen = () => {
  // const navigation = useNavigation();
  // const { nextPage, isDone } = useOnboarding();

  function handleDone() {
    navigation.navigate('Home');
  }

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        // onDone={handleDone}
        // swap
        showDone={true}
        scrollEnabled={true}
        showPagination={true}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{flex: 1}}
                  source={require('./animation.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'ANIMATION',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('./work.json')}
                  autoPlay
                  loop
                  style={{flex: 1}}
                />
              </View>
            ),
            title: 'WORK',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          // {
          //   backgroundColor: '#fff',
          //   image: (
          //     <View style={styles.lottie}>
          //     <LottieView
          //         source={require('../assets/animations/work.json')}
          //         autoPlay
          //       loop
          //     />
          //   </View>
          //   ),
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
          // },
          // {
          //   backgroundColor: '#fff',
          //   image: (
          //     <View style={styles.lottie}>
          //     <LottieView
          //         source={require('../assets/animations/work.json')}
          //         autoPlay
          //       loop
          //     />
          //   </View>
          //   ),
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
          // },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'red',
    // borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
  },
});
