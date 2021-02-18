import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Header,
  Gap,
  ProfilePicture,
  ProfileItem,
  Button,
} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile() {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" />
      <ProfilePicture name="Uzumaki Naruto" desc="Doktor Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumus" value="UGM 2020" />
      <ProfileItem label="Tempat Prakti" value="Bandung" />
      <ProfileItem label="No. STR" value="0000056732" />
      <View style={styles.action}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
