import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Header from '../components/header';

const {width, height} = Dimensions.get('window');

export default function register({navigation}) {
  const [ViewPass, setViewPass] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header navigation={navigation} title="Register" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput placeholder="Email" style={styles.TextInput} />
        <View style={styles.TextInputPassword}>
          <TextInput
            style={{width: width - 120}}
            placeholder="Password"
            secureTextEntry={!ViewPass ? true : false}
          />
          <TouchableOpacity onPress={() => setViewPass((prev) => !prev)}>
            <FeatherIcon name="eye" size={18} />
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Nama" style={styles.TextInput} />
        <TextInput placeholder="No Handphone" style={styles.TextInput} />
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          style={styles.ButtonSubmit}
          activeOpacity={0.6}>
          <Text style={{fontSize: 16, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonSubmit: {
    backgroundColor: '#4982C1',
    height: 48,
    width: width - 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
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
  TextInput: {
    width: width - 80,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 25,
  },
  TextInputPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    width: width - 80,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 25,
  },
});
