import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Router from './router'
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
  }, [])
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}

export default App;
