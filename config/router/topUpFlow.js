import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import topUp from '../../screen/main/topUp';
import topUpStatus from '../../screen/main/topUpStatus';

const Stack = createStackNavigator();

export default function topUpFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={topUp} name="topUp" />
      <Stack.Screen component={topUpStatus} name="topUpStatus" />
    </Stack.Navigator>
  );
}
