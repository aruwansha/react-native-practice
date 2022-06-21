import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import {DMDoctor3} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DMDoctor3} style={styles.profile} />
      <View>
        <View style={styles.otherChat}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <View>
          <Text style={styles.chatDate}>4.20 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingLeft: 16,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  otherChat: {
    backgroundColor: colors.chat.other,
    padding: 12,
    maxWidth: '80%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.white,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
