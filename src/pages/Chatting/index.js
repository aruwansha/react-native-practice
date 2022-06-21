import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {DMDoctor3} from '../../assets';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Nairobi Putri Hayza'}
        desc={'Dokter Anak'}
        isDark={true}
        photo={DMDoctor3}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
            <ChatItem isMe/>
            <ChatItem />
            <ChatItem />
          </View>
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
