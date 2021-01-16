import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  GoodNewsItem,
  HomeProfile,
  RatedDoctor,
  Gap,
} from '../../components';
import {colors, fonts} from '../../utils';
import {JSONDoctorCategory} from '../../assets'

export default function index() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcomeText}>
              Mau Konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperscroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.doctorCategory}>
                <Gap width={32} />
                {
                  JSONDoctorCategory.data.map(data => {
                    return <DoctorCategory key={data.id} category={data.category}/>
                  })
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.title}>Top Rated Doctor</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.title}>Good News</Text>
          </View>
          <GoodNewsItem />
          <GoodNewsItem />
          <GoodNewsItem />
          <Gap height={6} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 309,
  },
  doctorCategory: {
    flexDirection: 'row',
  },
  wrapperscroll: {
    marginHorizontal: -16,
  },
  content: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
