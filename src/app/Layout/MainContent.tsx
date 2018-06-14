import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withRouter } from 'react-router';

interface MainContentProps {
  content: JSX.Element;
  match: any;
}

class MainContent extends React.Component<MainContentProps> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
});

export default withRouter(MainContent);
