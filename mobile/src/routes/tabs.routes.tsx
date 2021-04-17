import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { shade, tint } from 'polished';
import React from 'react';
import Favorites from '../pages/Favorites';
import Notifications from '../pages/Notifications';

const Tabs = createBottomTabNavigator();
const TabsRoutes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator
          sceneContainerStyle={{
            backgroundColor: '#312e38',
          }}
          tabBarOptions={{
            inactiveBackgroundColor: '#312e38',
            activeBackgroundColor: shade(0.1, '#312e38'),
            showLabel: false,
            iconStyle: {
              color: '#f0f',
            },
            style: {
              borderTopColor: shade(0.2, '#312e38'),
            },
          }}
          screenOptions={{
            tabBarBadge: 1,
            tabBarBadgeStyle: {
              fontWeight: 'bold',
              color: tint(0.3, '#f0f'),
              backgroundColor: shade(0.2, '#312e38'),
            },
          }}>
          <Tabs.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarIcon: () => <Feather name="heart" color="#f0f" size={20} />,
            }}
          />
          <Tabs.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarIcon: () => <Feather name="bell" color="#f0f" size={20} />,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
};

export default TabsRoutes;
