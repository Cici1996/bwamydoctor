import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Gap, Header, ListItem, ProfilePicture} from '../../components'
import { colors } from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={10} />
      <ProfilePicture />
      <Gap height={14} />
      <ListItem
        icon="edit-profile"
        name="Edit Profile"
        desc="this desc"
        type="next"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <ListItem
        icon="language"
        name="Edit Profile"
        desc="this desc"
        type="next"
      />
      <ListItem icon="rate" name="Edit Profile" desc="this desc" type="next" />
      <ListItem icon="help" name="Edit Profile" desc="this desc" type="next" />
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    }
})
