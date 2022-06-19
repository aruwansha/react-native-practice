import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import Header from '../../components/molecules/Header';
import {Button, Gap, Link} from '../../components';
import {ILProfileDefault, ICAddPhoto} from '../../assets';
import fonts from '../../utils/fonts';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Upload Photo'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILProfileDefault} style={styles.avatar} />
            <ICAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Gap height={4} />
          <Text style={styles.proffesion}>Product Designer</Text>
        </View>
        <View>
          <Button title={'Upload & Continue'} />
          <Gap height={30} />
          <Link title={'Skip for this'} align={'center'} />
          <Gap height={64} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  proffesion: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
