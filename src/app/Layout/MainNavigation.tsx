import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigationItem from './MainNavigationItem';
import { Route, withRouter } from 'react-router-native';

interface MainContentProps {
  match: any;
}

class MainNavigation extends React.Component<MainContentProps> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <MainNavigationItem link={'/repository'} iconName={"ios-color-filter"} iconLabel={"Label"} />
        </View>
        <View style={styles.list}>
          <MainNavigationItem link={'/'} iconName={"ios-cog"} iconLabel={"Settings"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    backgroundColor: '#22292F',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default withRouter(MainNavigation);
