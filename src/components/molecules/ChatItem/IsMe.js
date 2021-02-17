import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors, fonts} from '../../../utils';

export default function IsMe() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Ibu dokter, mau tanya saya</Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
