import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DMDoctor1} from '../../../assets';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

const ListDoctor = ({isRead}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <Image style={styles.profile} source={DMDoctor1} />
        </View>
        <View>
          <Text style={styles.name}>Alexander Jannie</Text>
          <Text style={styles.message(isRead)}>
            Baik ibu, terima kasih banyak atas wakt...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  message: isRead => ({
    fontSize: 12,
    fontFamily: isRead ? fonts.primary[300] : fonts.primary[600],
    color: isRead ? colors.text.secondary : colors.text.primary,
  }),
});
