import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Timeline from '../screens/Timeline';
import Projects from '../screens/Projects';

import responsiveFontSize from '../functions/ResponsiveFontSize';
import scaleFactor from '../functions/ScaleFactor';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF5555',
        tabBarInactiveTintColor: '#bcbdd2',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60 * scaleFactor,
          paddingBottom: 10 * scaleFactor,
          paddingTop: 10 * scaleFactor,
          borderTopLeftRadius: 15 * scaleFactor,
          borderTopRightRadius: 15 * scaleFactor,
          marginLeft: 0,
          marginRight: 0,
          paddingRight: 10 * scaleFactor,
          elevation: 10 * scaleFactor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        tabBarLabelStyle: {
          fontSize: responsiveFontSize(10),
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24 * scaleFactor} color={color} />
          ),
          tabBarLabel: 'Timeline',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24 * scaleFactor} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="folder" size={24 * scaleFactor} color={color} />
          ),
          tabBarLabel: 'Projects',
        }}
      />
    </Tab.Navigator>
  );
}
