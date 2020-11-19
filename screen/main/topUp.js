import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Header from '../components/header';

export default function topUp({navigation}) {
  const [Nominal, setNominal] = useState(0);

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} title="Top Up" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/dompet.png')}
          style={{width: 230, height: 230}}
        />

        <TextInput
          onChangeText={setNominal}
          keyboardType="phone-pad"
          style={{
            borderWidth: 1,
            width: 300,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Nominal Top Up"
        />

        <TouchableOpacity
          onPress={() => navigation.push('topUpStatus', {nominal: Nominal})}
          style={{
            backgroundColor: '#4982C1',
            width: 300,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
