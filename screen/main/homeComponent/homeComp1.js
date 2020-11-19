import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

export default function homeComp1({navigation}) {
  return (
    <View style={styles.ContainerNavigasi}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('topup')}>
        <View style={styles.Rectangle}>
          <FeatherIcon name="plus-square" size={40} />
        </View>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          Top Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('qrpay')}>
        <View style={styles.Rectangle}>
          <FontAwesomeIcon name="qrcode" size={40} />
        </View>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          QR Pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('transfer')}>
        <View style={styles.Rectangle}>
          <FeatherIcon name="check-square" size={40} />
        </View>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          Transfer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerNavigasi: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: width - 40,
    height: 89,
    backgroundColor: '#4982C1',
    borderRadius: 10,
  },
  Rectangle: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
