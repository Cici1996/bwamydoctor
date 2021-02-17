import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import { Doctor1 } from '../../../assets';
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

export default function DarkProfile() {
    return (
      <View style={styles.container}>
        <Button type="icon-only" icon="back-light" />
        <View style={styles.content}>
          <Text style={styles.name}>Uzumaki Naruto</Text>
          <Text style={styles.desc}>Doktor Anak</Text>
        </View>
        <Image source={Doctor1} style={styles.avatar} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop:6,
    textAlign: 'center',
    color:colors.text.subtitle
  },
}); 