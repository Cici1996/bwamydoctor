import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconAccount,
  IconStartBlue,
  IconChevronRight,
  IconDocument,
  IconTranslate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListItem({profile, name, desc, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconAccount />;
    } else if (icon === 'language') {
      return <IconTranslate />;
    } else if (icon === 'rate') {
      return <IconStartBlue />;
    } else if (icon === 'help') {
      return <IconDocument />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconChevronRight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  content: {
    flex: 1,
    marginLeft:16
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
