import React,{useState,useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { ILNullPhoto } from '../../assets';
import {Gap, Header, ListItem, ProfilePicture} from '../../components'
import { Fire } from '../../config';
import { colors, getData, showError } from '../../utils';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName : '',
    profession:'',
    photo : ILNullPhoto
  })

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res.photo == ""?ILNullPhoto:{uri : res.photo};
      setProfile(data)
    })
  }, [])

  const signOut = () => {
    Fire.auth().signOut().then(() => {
      navigation.replace('GetStarted')
    }).catch(err => {
      showError(err.message);
    })
  }

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && <ProfilePicture photo={profile.photo} name={profile.fullName} desc={profile.profession} />}
      <Gap height={14} />
      <ListItem
        icon="edit-profile"
        name="Edit Profile"
        desc="Last Update Yesteday"
        type="next"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <ListItem
        icon="language"
        name="Language"
        desc="this desc"
        type="next"
      />
      <ListItem icon="rate" name="Give Us Rate" desc="this desc" type="next" />
      <ListItem icon="help" name="Sign Out" desc="Sign out from your account" type="next" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    }
})
