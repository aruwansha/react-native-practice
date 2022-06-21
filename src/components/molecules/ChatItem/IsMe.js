import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.selfChat}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <View>
        <Text style={styles.chatDate}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    paddingRight: 16,
    alignItems: 'flex-end',
  },
  selfChat: {
    backgroundColor: colors.chat.self,
    padding: 12,
    maxWidth: '70%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
