import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import Icon from './Icon';
import BtnSend from './BtnSend';

const Button = ({type, title, onPress, image, disable}) => {
  if (type === 'icon-only') {
    return <Icon image={image} onPress={onPress} />;
  }
  if (type === 'btnSend') {
    return <BtnSend disable={disable} onPress={() => {}} />;
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.button.secondary : colors.button.primary,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? colors.text.primary : colors.text.white,
  }),
});
