import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Gap, Header, List} from '../../components';
import colors from '../../utils/colors';
import {DMDoctor2, DMDoctor6, DMDoctor3} from '../../assets';

const ChooseDoctor = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DMDoctor6,
      name: 'Alexander Jannie',
      description: 'Pria',
    },
    {
      id: 2,
      profile: DMDoctor3,
      name: 'Nairobi Putri Hayza',
      description: 'Wanita',
    },
    {
      id: 3,
      profile: DMDoctor2,
      name: 'John McParker Steve',
      description: 'Pria',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        title={'Pilih Dokter'}
        isDark={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Gap height={4} />
      {doctors.map((doctor, index) => {
        return (
          <List
            key={index}
            profile={doctor.profile}
            name={doctor.name}
            description={doctor.description}
            isRead={true}
            hasNext={true}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
