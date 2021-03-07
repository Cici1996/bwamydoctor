import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { useDispatch } from 'react-redux';
import {Header, Input, Button, Gap} from '../../components';
import {Fire} from '../../config';
import {colors, setLoadingGlobal, showError, useForm} from '../../utils';
import {storeData, getData} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    setLoadingGlobal(dispatch,true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        const dataUser = {
          fullName: form.fullName,
          email: form.email,
          profession: form.profession,
          uid:user.uid
        };

        Fire.database()
          .ref('users/' + user.uid + '/')
          .set(dataUser);

        storeData('user', dataUser);

        //setForm('reset-value');
        navigation.navigate("UploadPhoto",dataUser);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('register', errorMessage);
        setForm('reset-value');
        setLoadingGlobal(dispatch,false);
        showError(errorMessage)
      });
  };

  return (
    <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              secureTextEntry
              onChangeText={(value) => setForm('password', value)}
            />
            <Gap height={40} />
            <Button onPress={onContinue} title="Continue" />
          </ScrollView>
        </View>
      </View>
  );
};

export default Register;

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
