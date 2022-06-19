import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import Icon from './icon';

const Button = ({type, title, onPress}) => {
  if (type === 'icon-only') {
    return <Icon image={'dark-back'} onPress={onPress} />;
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
    backgroundColor: type === 'secondary' ? colors.button.secondary : colors.button.primary,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? colors.text.secondary : colors.text.primary,
  }),
});
