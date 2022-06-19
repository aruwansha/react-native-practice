import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Input} from '../../components';
import Header from '../../components/molecules/Header';
import colors from '../../utils/colors';

const Register = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
      </View>
      <View style={styles.input}>
        <Input label={'Fullname'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Address'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Continue'} onPress={() => {navigation.navigate('UploadPhoto')}} />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    padding: 40,
  },
});
