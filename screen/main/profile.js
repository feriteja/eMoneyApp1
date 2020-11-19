import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const circleRadius = 140;

export default function profile() {
  return (
    <View>
      <View
        style={{
          height: 310,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        <View style={{position: 'absolute', top: 10, right: 20}}>
          <Text>LogOut </Text>
        </View>
        <Image
          source={require('../../assets/avatar/ava1.jpg')}
          style={{
            height: circleRadius,
            width: circleRadius,
            borderRadius: circleRadius / 3,
            borderWidth: 0.4,
            borderColor: '#000',
          }}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 3}}>
          Ayas Napmat
        </Text>
        <Text style={{fontSize: 15, marginTop: 3}}>+62813909889 </Text>
        <View
          style={{
            flexDirection: 'row',
            width: 250,
            justifyContent: 'space-around',
            marginTop: 3,
          }}>
          <TouchableOpacity style={styles.buttonSetting}>
            <Text>Ubah Profil </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSetting}>
            <Text>Setting </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSetting: {
    borderWidth: 0.3,

    borderColor: '#000',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
