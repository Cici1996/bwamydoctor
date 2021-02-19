import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Doctor3, Doctor2, Doctor1} from '../../assets';
import {ListItem} from '../../components';
import {colors, fonts} from '../../utils';

export default function Message({navigation}) {
  const [doctors] = useState([
    {
      id: 1,
      profile: Doctor3,
      name: 'Alexander Jannie',
      desc: 'Baik ibu terimakasih',
    },
    {
      id: 2,
      profile: Doctor1,
      name: 'Puti Jamx',
      desc: 'ohh tentu baik',
    },
    {
      id: 3,
      profile: Doctor2,
      name: 'Cameron Jamx',
      desc: 'ohh tentu baik',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((data) => {
          return (
            <ListItem
              key={data.id}
              profile={data.profile}
              name={data.name}
              desc={data.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
