/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Image, Button, TouchableOpacity} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';

import {soundData} from './sounds';

Sound.setCategory('Playback');

const App: () => React$Node = () => {
  let isPlaying = false;

  console.log(soundData);
  const [sound, setSound] = useState(null);
  const [status, setStatus] = useState('paused');
  console.log('SOUNDDDDDD', {sound});

  const playSound = (file) => {
    if (sound) {
      sound.play();
      // setStatus('playing');
    } else {
      // setStatus('loading');
      const newSound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        } else {
          setSound(newSound);
          newSound.play();
          // setStatus('playing');
        }
      });
    }
  };

  const stop = () => {
    if (sound) {
      sound.stop();
      setSound(null);
      // setStatus('paused');
    }
  };

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
    console.log('test');
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
      <View style={styles.iconsWrapperRow}>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/fire.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={playSound('https://old.knorcedger.com/songs/mySong.mp3')}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/river.png')}
            />
          </View>
        </TouchableOpacity>
        <Button
          onPress={stop}
          title="Stop"
          color="#841584"
          accessibilityLabel="pause button"
        />
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/wave.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/clock.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsWrapperRow}>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/fire.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/river.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/wave.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlay}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/img/clock.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconsWrapperRow: {
    marginHorizontal: 'auto',
    maxWidth: 100,
    flexDirection: 'row',
  },
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
  iconContainer: {
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    width: 33,
    height: 33,
  },
});

export default App;
