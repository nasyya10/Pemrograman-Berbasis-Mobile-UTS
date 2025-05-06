import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen'; // <-- Import Login
import { ThemeProvider } from './ThemeContext';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <NavigationContainer>
        {!isLoggedIn ? (
          <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (route.name === 'Home') iconName = focused ? 'rose' : 'rose-outline';
                else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
                else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
                return <Ionicons name={iconName} size={22} color={color} />;
              },
              tabBarActiveTintColor: '#e91e63',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: 60,
                paddingBottom: 5,
                backgroundColor: '#fff',
                elevation: 8,
              },
              tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
