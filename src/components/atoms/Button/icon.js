import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICDarkArrowBack,
  ICLightArrowBack,
  ICNext,
  ICEditProfil,
  ICLanguage,
  ICRate,
  ICHelp,
} from '../../../assets';

const Icon = ({image, isDisabled, onPress}) => {
  const Image = () => {
    if (image === 'darkBack') {
      return <ICDarkArrowBack />;
    }
    if (image === 'lightBack') {
      return <ICLightArrowBack />;
    }
    if (image === 'next') {
      return <ICNext />;
    }
    if (image === 'editProfile') {
      return <ICEditProfil />;
    }
    if (image === 'language') {
      return <ICLanguage />;
    }
    if (image === 'rate') {
      return <ICRate />;
    }
    if (image === 'help') {
      return <ICHelp />;
    }
    return <ICLightArrowBack />;
  };
  if (isDisabled) {
    return (
      <View onPress={onPress}>
        <Image />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Image />
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({});
