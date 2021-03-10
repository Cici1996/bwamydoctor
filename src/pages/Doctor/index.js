import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  GoodNewsItem,
  HomeProfile,
  RatedDoctor,
  Gap,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Doctor2} from '../../assets';
import {Fire} from '../../config';

export default function index({navigation}) {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    Fire.database()
      .ref('categories_doctor/')
      .once('value')
      .then((res) => {
        if(res.val()){
          setCategories(res.val())
        }
      })
      .catch((err) => {
        showError(err.message);
      });

    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if(res.val()){
          setNews(res.val())
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcomeText}>
              Mau Konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperscroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.doctorCategory}>
                <Gap width={32} />
                {categories.map((data) => {
                  return (
                    <DoctorCategory
                      key={data.id}
                      category={data.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.title}>Top Rated Doctor</Text>
            <RatedDoctor
              name="Alexa"
              desc="Doktor Umum"
              avatar={Doctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Alexa"
              desc="Doktor Umum"
              avatar={Doctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Alexa"
              desc="Doktor Umum"
              avatar={Doctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.title}>Good News</Text>
          </View>
          {news.map(item => {
            return(
              <GoodNewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
            )
          })}
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
