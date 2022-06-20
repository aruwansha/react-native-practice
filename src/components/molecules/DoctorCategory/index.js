import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  ILDokterAnak,
  ILDokterObat,
  ILDokterUmum,
  ILPsikiater,
} from '../../../assets/illustration';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const DoctorCategory = ({category}) => {
  const IconDoctor = () => {
    if (category === 'dokter umum') {
      return <ILDokterUmum />;
    }
    if (category === 'psikiater') {
      return <ILPsikiater />;
    }
    if (category === 'dokter obat') {
      return <ILDokterObat />;
    }
    if (category === 'dokter anak') {
      return <ILDokterAnak />;
    }
    return <ILDokterUmum />;
  };
  return (
    <View style={styles.container}>
      <View>
        <IconDoctor />
      </View>
      <View>
        <Text style={styles.text}>Saya butuh</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: colors.card,
    alignSelf: 'flex-start',
    width: 130,
    height: 130,
    padding: 12,
    marginRight: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
});
