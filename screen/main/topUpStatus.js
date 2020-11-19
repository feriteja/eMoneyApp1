import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function topUpStatus({navigation, route}) {
  const {nominal} = route.params;

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
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/dompet.png')}
          style={{width: 230, height: 230}}
        />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>Top Up Berhasil</Text>
          <Text style={{fontSize: 24}}>Rp. {nominal}</Text>
        </View>

        <View
          style={{
            width: 300,
            alignItems: 'center',
            height: 100,
            justifyContent: 'center',
            backgroundColor: '#4982C1',
            borderRadius: 5,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, color: '#fff'}}>{today}</Text>
          <Text style={{fontSize: 18, color: '#fff'}}>Bank Untung</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('main')}
          style={{
            backgroundColor: '#4982C1',
            width: 300,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
