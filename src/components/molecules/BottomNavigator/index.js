import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import TabItem from '../../atoms/TabItem';
import colors from '../../../utils/colors';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          // <TouchableOpacity
          //   accessibilityRole="button"
          //   accessibilityState={isFocused ? {selected: true} : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={{flex: 1}}>
          //   <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          // </TouchableOpacity>
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 53,
    backgroundColor: colors.secondary,
  },
});
