import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <Link title={'Forgot My Password'} size={12} onPress={() => {}} />
      <Gap height={40} />
      <Button
        title={'Sign In'}
        onPress={() => {
          navigation.replace('MainApp');
        }}
      />
      <Gap height={30} />
      <Link
        title={'Create New Account'}
        size={16}
        align={'center'}
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
