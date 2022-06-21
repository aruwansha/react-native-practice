import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, Profile, ProfileItem, Button} from '../../components';
import colors from '../../utils/colors';
import {DMDoctor3} from '../../assets';

const DoctorProfile = ({navigation}) => {
  const [data, setData] = useState({
    alumnus: 'Universitas Indonesia, 2020',
    tempatPraktik: 'Rumah Sakit Umum, Bandung',
    noStr: '0000116622081996',
  });
  return (
    <View style={styles.page}>
      <Header
        title={'Profile'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Profile
        name={'Nairobi Putri Hayza'}
        category={'Dokter Anak'}
        photo={DMDoctor3}
      />
      <ProfileItem label={'Alumnus'} value={data.alumnus} />
      <ProfileItem label={'Tempat Praktik'} value={data.tempatPraktik} />
      <ProfileItem label={'No. STR'} value={data.noStr} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => {
            navigation.navigate('Chatting');
          }}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    marginVertical: 23,
    marginHorizontal: 40,
  },
});
