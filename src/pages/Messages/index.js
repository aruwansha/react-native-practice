import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {List} from '../../components/molecules';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import {DMDoctor6, DMDoctor2, DMDoctor3} from '../../assets';

const Messages = ({navigation}) => {
  const nav = navigation;
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DMDoctor6,
      name: 'Alexander Jannie',
      isRead: true,
      description: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DMDoctor3,
      name: 'Nairobi Putri Hayza',
      isRead: false,
      description: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DMDoctor2,
      name: 'John McParker Steve',
      isRead: true,
      description: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.sectionLabel}>Messages</Text>
        {doctors.map((doctor, index) => {
          return (
            <List
              key={index}
              profile={doctor.profile}
              name={doctor.name}
              isRead={doctor.isRead}
              description={doctor.description}
              onPress={() => {
                nav.navigate('Chatting');
              }}
            />
          );
        })}
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
