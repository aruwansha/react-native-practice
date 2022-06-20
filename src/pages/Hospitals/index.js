import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILHospitalBG} from '../../assets/illustration';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {ListHospital} from '../../components/molecules';
import { DMHospital1 } from '../../assets';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.sectionLabel}>Nearby Hospitals</Text>
        <Text style={styles.sectionDescription}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospital1}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospital1}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {height: 240, paddingTop: 30},
  sectionLabel: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
