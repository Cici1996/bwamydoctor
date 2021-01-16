import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ILDokterUmum,
  ILDokterPisikiater,
  ILDokterObat,
  ILDokterAnak,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    if (category == 'umum') {
      return <ILDokterUmum style={styles.icon} />;
    } else if (category == 'pisikiater') {
      return <ILDokterPisikiater style={styles.icon} />;
    } else if (category == 'obat') {
      return <ILDokterObat style={styles.icon} />;
    } else if (category == 'anak') {
      return <ILDokterAnak style={styles.icon} />;
    } else {
      return <ILDokterUmum style={styles.icon} />;
    }
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  icon: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
