import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Route from './config/router';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({});
