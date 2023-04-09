import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ScheScreen from './screens/ScheScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const homeName = "Home";
const scheName = "Schedule";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === scheName) {
              iconName = focused ? 'calendar' : 'calendar-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={'20px'} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0A9FAC',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 15 },
          style: { padding: 10, height: 70, }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={scheName} component={ScheScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}