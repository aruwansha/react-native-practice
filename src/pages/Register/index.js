import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Input} from '../../components';
import Header from '../../components/molecules/Header';
import {colors, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
  };

  return (
    <View style={styles.page}>
      <View>
        <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
      </View>
      <ScrollView style={styles.input}>
        <Input
          label={'Fullname'}
          value={form.fullname}
          onChangeText={value => {
            setForm('fullname', value);
          }}
        />
        <Gap height={24} />
        <Input
          label={'Pekerjaan'}
          value={form.profession}
          onChangeText={value => {
            setForm('profession', value);
          }}
        />
        <Gap height={24} />
        <Input
          label={'Email Address'}
          value={form.email}
          onChangeText={value => {
            setForm('email', value);
          }}
        />
        <Gap height={24} />
        <Input
          label={'Password'}
          value={form.password}
          onChangeText={value => {
            setForm('password', value);
          }}
          isSecure
        />
        <Gap height={40} />
        <Button
          title={'Continue'}
          onPress={() => {
            onContinue();
          }}
        />
      </ScrollView>
    </View>
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
