import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Repository extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm a repository!</Text>
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
});
