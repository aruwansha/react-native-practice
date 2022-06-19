import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICDarkArrowBack} from '../../../assets';

const Icon = ({image, onPress}) => {
  const Image = () => {
    if (image === 'dark-back') {
      return <ICDarkArrowBack />;
    }
    if (image === 'light-back') {
      return <ICDarkArrowBack />;
    }
    return <ICDarkArrowBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Image />
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({});
