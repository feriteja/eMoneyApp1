import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Header from '../components/header';

const {width, height} = Dimensions.get('window');

export default function transfer({navigation}) {
  const [Found, setFound] = useState(false);
  const [Nomber, setNomber] = useState();
  const [Nomninal, setNomninal] = useState(0);
  const [Error, setError] = useState();

  const ConditionDummy = () => {
    if (Found === true) {
      navigation.push('transferConfirm', {nominal: Nomninal, nomber: Nomber});
    } else {
      setError();
      Nomber ? setFound(true) : setError('Nomber tidak ditemukan');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Transfer" navigation={navigation} />
      <Image
        style={{width: width * 0.7, height: height * 0.2, marginTop: 20}}
        source={require('../../assets/img/transfer.png')}
      />
      <View style={{marginTop: 21}}>
        <TextInput
          onChangeText={setNomninal}
          style={styles.textInput}
          placeholder="Nominal Transfer"
          keyboardType="phone-pad"
        />
        <TextInput
          onChangeText={setNomber}
          style={styles.textInput}
          keyboardType="phone-pad"
          placeholder="No Handphone Penerima"
        />
        {Found && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18}}>Penerima:</Text>
            <Text style={{fontWeight: 'bold', fontSize: 24}}>Receh Name</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Rp. {Nomninal}
            </Text>
          </View>
        )}

        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'red',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          {Error}
        </Text>

        <TouchableOpacity
          onPress={() => ConditionDummy()}
          style={{
            backgroundColor: '#4982C1',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 24, color: '#fff', textTransform: 'capitalize'}}>
            {Found ? 'Transfer' : 'Periksa nomor'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: width - 80,
    height: 48,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 4,
    marginBottom: 17,
    paddingHorizontal: 20,
  },
});
