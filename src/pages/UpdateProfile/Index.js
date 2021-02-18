import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {Gap,Button, Header, Input, ProfilePicture} from '../../components'
import { colors } from '../../utils';

export default function UpdateProfile() {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfilePicture />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    content:{
        padding:40,
        paddingTop:0
    }
})
