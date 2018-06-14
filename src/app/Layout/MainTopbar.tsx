import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MainContentProps {
}

export class MainTopbar extends React.Component<MainContentProps> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '3%',
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
