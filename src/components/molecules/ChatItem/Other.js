import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Doctor1 } from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Other() {
    return (
      <View style={styles.container}>
        <Image source={Doctor1} style={styles.avatar} />
        <View>
          <View style={styles.chatContent}>
            <Text style={styles.text}>Ibu dokter, mau tanya saya</Text>
          </View>
          <Text style={styles.date}>4.20 AM</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  chatContent: {
    backgroundColor: colors.primary,
    padding: 12,
    paddingRight: 18,
    maxWidth: '90%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection:'row'
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar:{
      width:30,
      height:30,
      borderRadius:30/2,
      marginRight:12
  }
});
