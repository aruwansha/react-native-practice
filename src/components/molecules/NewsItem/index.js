import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {DMNews1} from '../../../assets';

const NewsItem = ({title}) => {
  return (
    <View style={styles.page}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={DMNews1} />
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.newsBorder,
  },
  titleSection: {},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 205,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  imageWrapper: {},
  image: {
    height: 60,
    width: 60,
    borderRadius: 11,
  },
});
