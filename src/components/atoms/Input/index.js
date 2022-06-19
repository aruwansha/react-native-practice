import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputLabel: {
    color: colors.text.secondary,
    marginBottom: 6,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 12,

  },
});
