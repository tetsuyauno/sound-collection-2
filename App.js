/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const App: () => React$Node = () => {
  let isPlaying = false;

  const whoosh = new Sound(
    require('./assets/sounds/dryer.mp3'),
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    },
  );

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Nature</Text>
              <View style={styles.icons}>
                <TouchableOpacity onPress={togglePlay}>
                  <Image
                    source={require('./assets/img/fire.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlay}>
                  <Image
                    source={require('./assets/img/river.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlay}>
                  <Image
                    source={require('./assets/img/wave.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlay}>
                  <Image
                    source={require('./assets/img/clock.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.sectionTitle}>TESTING</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#b5d6ce',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10,
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
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    width: 70,
    height: 70,
    padding: 40,
    backgroundColor: '#fffff0',
    borderRadius: 10,
  },
});

export default App;
