import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import transfer from '../../screen/main/transfer';
import transferConfirm from '../../screen/main/transferConfirm';

const Stack = createStackNavigator();

export default function transferFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={transfer} name="transfer" />
      <Stack.Screen component={transferConfirm} name="transferConfirm" />
    </Stack.Navigator>
  );
}
