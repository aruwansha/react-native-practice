import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

const Input = ({label, value, onChangeText, isSecure}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocus = () => {
    setBorder(colors.tertiary);
  };
  const onBlur = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry= {isSecure}
      />
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
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 12,
  }),
});
