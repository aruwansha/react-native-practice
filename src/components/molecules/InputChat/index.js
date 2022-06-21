import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputChat}
        placeholder={'Tulis pesan untuk Nairobi'}
      />
      <Button type={'btnSend'} image={'lightSend'} disable={false} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: colors.white},
  inputChat: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
