import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Header from '../components/header';

export default function qrPayConfirm({navigation, route}) {
  const {nomber, nominal} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Header navigation={navigation} title="Konfirmasi Pembayaran" />

      <Image
        source={require('../../assets/img/konfirmasiPembayaran.png')}
        style={{height: 250, width: 250, marginTop: 40}}
      />
      <View
        style={{
          borderBottomWidth: 0.6,
          borderBottomColor: '#c0c0c0',
          width: 280,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24}}>Rp. {nominal} </Text>
      </View>

      <View style={styles.containerKonfirmasi}>
        <Text style={{fontSize: 18, color: '#fff'}}>Pembayaran Kepada:</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>
          {nomber}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.push('paymentStatus', {nomber, nominal})}
        style={{
          backgroundColor: '#4982C1',
          marginTop: 30,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          width: 280,
        }}>
        <Text style={{fontSize: 20, color: '#fff'}}>Submmit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerKonfirmasi: {
    backgroundColor: '#4982C1',
    height: 120,
    width: 280,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
