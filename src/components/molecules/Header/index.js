import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {Button, Gap} from '../../atoms';

const Header = ({title, desc, photo, isDark, onPress}) => {
  if (isDark) {
    return (
      <View style={styles.container(isDark)}>
        <Button type={'icon-only'} onPress={onPress} image={'lightBack'} />
        <View style={styles.content}>
          <Text style={styles.title(isDark)}>{title}</Text>
          {desc && <Text style={styles.desc(isDark)}>{desc}</Text>}
        </View>
        {photo && <Image source={photo} style={styles.avatar} />}
      </View>
    );
  }
  return (
    <View style={styles.container(isDark)}>
      <Button type={'icon-only'} onPress={onPress} image={'darkBack'} />
      <View style={styles.content}>
        <Text style={styles.title(isDark)}>{title}</Text>
        {desc && <Text style={styles.desc(isDark)}>{desc}</Text>}
      </View>
      <Gap width={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: isDark => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: isDark ? colors.secondary : colors.white,
  }),
  content: {flex: 1},
  title: isDark => ({
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: isDark ? colors.text.white : colors.text.primary,
  }),
  desc: isDark => ({
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: isDark ? colors.text.subTitle : colors.text.secondary,
  }),
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
});
