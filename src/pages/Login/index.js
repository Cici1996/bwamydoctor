import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError, storeData, useForm, setLoadingGlobal } from '../../utils';

const Login = ({ navigation }) => {
  const [form, setForm] = useForm({ email: 'adah@admin.bn', password: '87654321' });
  const dispatch = useDispatch();

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDb) => {
            if (resDb.val()) {
              storeData('user', resDb.val());
              setLoading(false);
              navigation.replace('MainApp')
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        showError(err.message);
      });
  };

  const setLoading = (value) => {
    setLoadingGlobal(dispatch, value)
  }

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={() => login()} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 200,
  },
});
