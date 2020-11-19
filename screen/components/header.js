import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

export default function header({title, navigation}) {
  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <FeatherIcon name="arrow-left" size={30} color={'#F2F2F2'} />
      </TouchableOpacity>
      <Text style={styles.HeaderFont}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 10,
    width,
    height: 56,
    backgroundColor: '#005690',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderFont: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 21,
  },
});
