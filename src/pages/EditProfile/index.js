import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {Header, Profile, Input, Gap, Button} from '../../components';
import {DMProfileSet} from '../../assets';
import colors from '../../utils/colors';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Edit Profile'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Profile photo={DMProfileSet} isRemove />
        <View style={styles.input}>
          <Input label={'Fullname'} />
          <Gap height={24} />
          <Input label={'Pekerjaan'} />
          <Gap height={24} />
          <Input label={'Email Address'} />
          <Gap height={24} />
          <Input label={'Password'} />
          <Gap height={40} />
          <Button title={'Save Profile'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    padding: 40,
  },
});
