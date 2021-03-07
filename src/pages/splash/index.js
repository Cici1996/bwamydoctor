import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from './../../assets'
import {colors, fonts} from '../../utils';
import { Fire } from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const subscriber = Fire.auth().onAuthStateChanged((user) => {
      if(user){
        navigation.replace("MainApp");
      }else{
        navigation.replace("GetStarted");
      }
    })

    return subscriber;
  }, [])
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white,flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    fontSize: 20,
    fontFamily:fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
