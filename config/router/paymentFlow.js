import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import payment from '../../screen/main/qrPay';
import paymentConfirm from '../../screen/main/qrPayConfirm';
import paymentStatus from '../../screen/main/qrPayStatus';

const Stack = createStackNavigator();

export default function paymentFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={payment} name="payment" />
      <Stack.Screen component={paymentConfirm} name="paymentConfirm" />
      <Stack.Screen component={paymentStatus} name="paymentStatus" />
    </Stack.Navigator>
  );
}
