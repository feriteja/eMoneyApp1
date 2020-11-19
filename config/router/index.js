import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Auth from './auth';
import Main from './main';
import TopUp from './topUpFlow';
import QrPay from './paymentFlow';
import Transfer from './transferFlow';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="topup" component={TopUp} />
        <Stack.Screen name="qrpay" component={QrPay} />
        <Stack.Screen name="transfer" component={Transfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
