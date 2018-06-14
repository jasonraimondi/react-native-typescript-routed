import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Repository } from './Repository';

export class RepositoryList extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>Open up App.ts to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <Repository />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: '#efefef'
  }
});
