import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/dashboard/Index';

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}