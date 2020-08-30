/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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

import {soundData} from './sounds.js';

const App: () => React$Node = () => {
  const [sound, setSound] = useState(null);
  const [file, setFile] = useState(null);

  const playFile = (file) => {
    const newSound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      setSound(newSound);
      newSound.play();
    });
  };

  const handlePress = (file) => {
    if (sound) {
      pause(sound);
      //if different icon is clicked
      if (sound._filename.concat('.mp3') !== file) {
        playFile(file);
      } else {
        setSound(null);
      }
    } else {
      playFile(file);
    }
  };

  const pause = (sound) => {
    sound.stop();
    setSound(null);
  };

  return (
    <View style={styles.iconsWrapperRow}>
      {soundData.map((e, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => handlePress(e.file)}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={e.image} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
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
