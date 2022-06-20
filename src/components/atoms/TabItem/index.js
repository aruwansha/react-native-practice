import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICDoctor,
  ICDoctorActive,
  ICMaps,
  ICMapsActive,
  ICMessages,
  ICMessagesActive,
} from '../../../assets';
import colors from '../../../utils/colors';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (title === 'Messages') {
      return active ? <ICMessagesActive /> : <ICMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <ICMapsActive /> : <ICMaps />;
    }
    return <ICDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    color: active ? colors.text.menuActive : colors.text.menuInactive,
  }),
});
