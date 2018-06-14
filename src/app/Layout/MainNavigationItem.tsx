import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, withRouter } from 'react-router-native';

import { Ionicons } from '@expo/vector-icons';

interface MainNavigationIcon {
  link: string;
  iconName: string;
  iconLabel: string;
  match: any;
}

class MainNavigationItem extends React.Component<MainNavigationIcon> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    const destination = `${this.props.link}`;
    return (
      <Link push
            onPress={() => console.log(destination, this.props.match)}
            style={styles.container}
            to={destination}
      >
        <View>
          <Ionicons name={this.props.iconName} size={50} color="#fff"/>
          <Text style={styles.text}>{this.props.iconLabel}</Text>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    paddingTop: 3,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  }
});

export default withRouter(MainNavigationItem);
