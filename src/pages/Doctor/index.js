import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {Gap} from '../../components';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile
          name={'Shayne Daila'}
          profession={'Product Manager'}
          onPress={() => {
            navigation.navigate('UserProfile');
          }}
        />
        <ScrollView>
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={16} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <DoctorCategory
                category={'dokter umum'}
                onPress={() => {
                  navigation.navigate('ChooseDoctor');
                }}
              />
              <DoctorCategory category={'psikiater'} />
              <DoctorCategory category={'dokter obat'} />
              <DoctorCategory category={'dokter anak'} />
            </View>
          </ScrollView>
          <Gap height={30} />
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <Gap height={16} />
          <RatedDoctor
            name={'Alexa Rachel'}
            categoriy={'Pediatrician'}
            onPress={() => {
              navigation.navigate('DoctorProfile');
            }}
          />
          <RatedDoctor name={'Sunny Frank'} category={'Pediatrician'} />
          <RatedDoctor name={'Poe Minn'} category={'Pediatrician'} />
          <Gap height={14} />
          <Text style={styles.sectionLabel}>Good News</Text>
          <Gap height={16} />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

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

  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginHorizontal: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginHorizontal: 16,
  },
});
