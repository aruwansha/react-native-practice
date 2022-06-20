import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DMProfileSet} from '../../../assets';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {Gap} from '../../atoms';

const HomeProfile = ({name, profession}) => {
  return (
    <View style={styles.page}>
      <View style={styles.profileWrapper}>
        <Image source={DMProfileSet} style={styles.profile} />
      </View>
      <Gap width={12} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileWrapper: {
    borderRadius: 46 / 2,
  },
  profile: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
