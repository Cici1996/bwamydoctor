import React from 'react'
import {ILLogo, ILGetStarted} from './../../assets';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button,Gap} from '../../components'

const GetStarted = () => {
    return (
      <ImageBackground source={ILGetStarted} style={styles.page}>
        <View>
          <ILLogo />
          <Text style={styles.title}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
          </Text>
        </View>
        <View>
          <Button title="Get Started" onPress={() => alert('hello')} />
          <Gap height={16} />
          <Button title="Sign" type="secondary" />
        </View>
      </ImageBackground>
    );
}

export default GetStarted 

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
