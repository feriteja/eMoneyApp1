import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import Header from '../components/header';

export default function qrPay({navigation}) {
  const [Number, setNumber] = useState();
  const [Nominal, setNominal] = useState();

  const onSuccess = (e) => {
    const data = JSON.parse(`${e.data}`);
    navigation.push('paymentConfirm', {
      nomber: data.nomber,
      nominal: data.nominal,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} title="QR Payment" />

      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>Scan disini untuk pembayaran</Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>{Number} </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
