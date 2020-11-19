import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
export default function transferConfirm({route, navigation}) {
  const {nomber, nominal} = route.params;

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = today.getMonth();
  const yyyy = today.getFullYear();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  today = dd + '/' + months[mm] + '/' + yyyy;

  return (
    <View style={styles.container}>
      <Image
        style={{width: width * 0.7, height: height * 0.2, marginTop: 60}}
        source={require('../../assets/img/transfer.png')}
      />
      <Text
        style={{
          marginTop: 62,
          marginBottom: 23,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Transfer Berhasil
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Rp. {nominal}
      </Text>

      <View
        style={{
          width: 280,
          height: 121,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4982C1',
        }}>
        <Text style={styles.textConfirm}>{today} </Text>
        <Text style={styles.textConfirm}>Penerima: {nomber} </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('main')}
        style={{
          backgroundColor: '#4982C1',
          height: 48,
          width: 280,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={styles.textConfirm}>SELESAI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textConfirm: {
    color: '#fff',
    fontSize: 18,
  },
});
