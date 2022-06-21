import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import {Button, Icon} from '../../atoms';

const List = ({
  profile,
  name,
  description,
  isRead,
  hasNext,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon image={icon}/> : <Image style={styles.profile} source={profile} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description(isRead)}>{description}</Text>
      </View>
      {hasNext && <Button type={'icon-only'} image={'next'} />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  profile: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  description: isRead => ({
    fontSize: 12,
    fontFamily: isRead ? fonts.primary[300] : fonts.primary[600],
    color: isRead ? colors.text.secondary : colors.text.primary,
  }),
});
