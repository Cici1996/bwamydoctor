import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconMap,
  IconMapActive,
  IconMessage,
  IconMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active,onPress,onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    } else if (title === 'Message') {
      return active ? <IconMessageActive /> : <IconMessage />;
    } else if (title === 'Hospital') {
      return active ? <IconMapActive /> : <IconMap />;
    } else {
      return <IconDoctor />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuactive : colors.text.menuinactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
