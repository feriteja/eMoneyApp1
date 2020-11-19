import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function qrPayStatus({navigation, route}) {
  const {nomber, nominal} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Image
        source={require('../../assets/img/konfirmasiPembayaran.png')}
        style={{height: 250, width: 250, marginTop: 40}}
      />
      <View
        style={{
          width: 280,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24}}>Pembayaran Berhasil</Text>
        <Text style={{fontSize: 24}}>Rp. {nominal} </Text>
      </View>

      <View style={styles.containerKonfirmasi}>
        <Text style={{fontSize: 18, color: '#fff'}}>Pembayaran Kepada:</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>
          {nomber}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('main')}
        style={{
          backgroundColor: '#4982C1',
          marginTop: 30,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          width: 280,
        }}>
        <Text style={{fontSize: 20, color: '#fff'}}>Selesai</Text>
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
