import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Button, Header, Input, ProfilePicture} from '../../components';
import {colors, getData, setLoadingGlobal, showError, storeData} from '../../utils';
import {Fire} from '../../config';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { useDispatch } from 'react-redux';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDb, setPhotoForDb] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res.photo == ""?ILNullPhoto:{uri : res.photo};
      setPhoto(data.photo);
      setProfile(data);
    });
  }, []);

  const update = () => {
    setLoadingGlobal(dispatch,true);
    if(password.length > 0){
      if(password.length < 6){
        setLoadingGlobal(dispatch,false);
        showError('Password Kurang dari 6 Karakter')
      }else{
        updatePassword();
        updateProfileData();
        setLoadingGlobal(dispatch,false);
        navigation.replace('MainApp');
      }
    }else{
      updateProfileData();
      setLoadingGlobal(dispatch,false);
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
        showError(err.message)
      });
  }

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if(user){
        user.updatePassword(password)
        .catch(err => {
          showError(err.message)
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
          showError(response.error);
        }
      },
    );
  }

  return (
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
