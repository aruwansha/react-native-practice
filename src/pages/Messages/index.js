import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctor} from '../../components/molecules';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import {Gap} from '../../components/atoms';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.sectionLabel}>Messages</Text>
        <ListDoctor isRead={true} />
        <ListDoctor />
        <ListDoctor isRead={true} />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionLabel: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginHorizontal: 16,
    marginTop: 30,
  },
});
