import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Button, Header, Input, ProfilePicture, Loading} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDb, setPhotoForDb] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res.photo == ""?ILNullPhoto:{uri : res.photo};
      setPhoto(data.photo);
      setProfile(data);
    });
  }, []);

  const update = () => {
    setLoading(true);
    if(password.length > 0){
      if(password.length < 6){
        setLoading(false);
        showMessage({
          message: 'Password Kurang dari 6 Karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        setLoading(false);
      }else{
        updatePassword();
        updateProfileData();
        setLoading(false);
        navigation.replace('MainApp');
      }
    }else{
      updateProfileData();
      setLoading(false);
      navigation.replace('MainApp');
    }
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDb;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user',data)
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  }

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if(user){
        user.updatePassword(password)
        .catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        })
      }
    })
  }

  const changeText = (key, value) => {
    setProfile({...profile, [key]: value});
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        if (!response.didCancel && response.error == null) {
          const photoForDB = `data:${response.type};base64, ${response.data}`;
          const sourceImage = {uri: response.uri};
          setPhotoForDb(photoForDB);
          setPhoto(sourceImage);
        }else if(response.error != null){
          showMessage({
            message: response.error,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        }
      },
    );
  }

  return (
    <>
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfilePicture photo={photo} isRemove onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(val) => changeText('fullName', val)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(val) => changeText('profession', val)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" secureTextEntry value={password} onChangeText={(val) => setPassword(val)} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
    {loading && <Loading/>}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
