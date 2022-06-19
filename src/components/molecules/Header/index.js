import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.page}>
      <Button
        type={'icon-only'}
        onPress={onPress}
      />
      <Text style={styles.title}>{title}</Text>
      <Gap width={40} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    flex: 1,
  },
});
