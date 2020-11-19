import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import home from '../../screen/main/home';
import profile from '../../screen/main/profile';
import transaction from '../../screen/main/transaction';

const BottomTab = createBottomTabNavigator();

export default function main() {
  return (
    <BottomTab.Navigator tabBarOptions={{showLabel: false}}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" size={size} />
          ),
        }}
        name="home"
        component={home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="navigation" size={size} />
          ),
        }}
        name="transaction"
        component={transaction}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="user" size={size} />
          ),
        }}
        name="profile"
        component={profile}
      />
    </BottomTab.Navigator>
  );
}
