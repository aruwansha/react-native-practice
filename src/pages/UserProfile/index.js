import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Profile, List, Gap} from '../../components';
import colors from '../../utils/colors';
import {DMProfileSet} from '../../assets';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Profile'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Profile
        name={'Shayna Melinda'}
        desc={'Product Designer'}
        photo={DMProfileSet}
      />
      <Gap height={14} />
      <List
        name={'Edit Profile'}
        description={'Last Updated Yesterday'}
        icon={'editProfile'}
        isRead
        hasNext
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
      />
      <List
        name={'Language'}
        description={'Available 10 Languages'}
        icon={'language'}
        isRead
        hasNext
      />
      <List
        name={'Give Us Rate'}
        description={'On Google Play Store'}
        icon={'rate'}
        isRead
        hasNext
      />
      <List
        name={'Help Center'}
        description={'Read Our Guideline'}
        icon={'help'}
        isRead
        hasNext
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
