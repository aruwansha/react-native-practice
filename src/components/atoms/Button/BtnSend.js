import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import Icon from './Icon';
import {ICDarkSend, ICLightSend} from '../../../assets';

const BtnSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <ICDarkSend />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <ICLightSend />
    </TouchableOpacity>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
