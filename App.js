import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const App = () => {
  let isPlaying = false;

  var soundPath = './assets/sounds/dryer.mp3';

  if (Platform.OS === 'android') {
    whoosh = new Sound(require(soundPath), Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('failed to load the sound', e);
      }
    });
  } else {
    whoosh = new Sound(require(soundPath), async (e) => {
      if (e) {
        console.log('failed to load the sound', e);
      }
    });
  }

  const play = () => {
    whoosh.play();
    isPlaying = true;
  };
  const stopPlaying = () => {
    whoosh.stop();
    isPlaying = false;
  };

  const togglePlay = () => (isPlaying ? stopPlaying() : play());

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <TouchableOpacity onPress={togglePlay}>
              <Image source={require('./assets/img/test.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={togglePlay}>
              <Text style={isPlaying === true ? styles.red : styles.black}>
                Play
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark,
  },
  black: {
    width: 88,
    height: 88,
    color: Colors.black,
  },
  red: {
    width: 88,
    height: 88,
    color: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
