import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DMDoctor1, ICStar} from '../../../assets';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {Gap} from '../../atoms';

const RatedDoctor = ({name, category, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <View style={styles.profileWrapper}>
        <Image source={DMDoctor1} style={styles.profile} />
        <Gap width={12} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>

      <View style={styles.star}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  star: {
    flexDirection: 'row',
  },
});
