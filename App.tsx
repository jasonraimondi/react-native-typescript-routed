import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';



import MainContent from './src/app/Layout/MainContent';
import MainNavigation from './src/app/Layout/MainNavigation';
import { RepositoryList } from './src/app/RepositoryList';
import { MainTopbar } from './src/app/Layout/MainTopbar';
import { Repository } from './src/app/Repository';

export default class App extends React.Component {
  
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <MainTopbar />
          <MainContent content={
            <ScrollView>
              <Route exact path="/" component={Repository}/>
              <Route exact path="/repository" component={RepositoryList}/>
            </ScrollView>
          } />
          <MainNavigation />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
