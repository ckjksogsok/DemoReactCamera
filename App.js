/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import CameraPage from './src/camera';

    export default class App extends React.Component {
      render() { 
    import React from 'react';
    import { View, Image, ScrollView } from 'react-native';

    import styles from './style';

    export default ({ captures = [] }) => (
      <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]}
      >
        {captures.map(({ uri }) => (
          <View style={styles.galleryImageContainer} key={uri}>
            <Image source={{ uri }} style={styles.galleryImage} />
          </View>
        ))}
      </ScrollView>
      );
        return (
          <CameraPage />
        );
      };
    };