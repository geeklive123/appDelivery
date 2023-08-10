import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/Presentation/views/roles/Roles';
import { ClientTabsNavigator } from './src/Presentation/navigator/ClientTabsNavigator';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { ProfileUpdateScreen } from './src/Presentation/views/profile/update/ProfileUpdate';
import { User } from './src/Domain/entities/User';

export type RootStackParamList={
  HomeScreen:undefined,
  RegisterScreen:undefined,
  RolesScreen:undefined,
  AdminTabsNavigator:undefined,
  ClientTabsNavigator:undefined,
  ProfileUpdateScreen:{user:User},
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        
        />
     <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown:true,
            title:'Nuevo Usuario'
          }}
        
        />
         

      <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{
            headerShown:true,
            title:'Selecciona un Rol'
          }}
        
        />

<Stack.Screen
          name="ProfileUpdateScreen"
          component={ProfileUpdateScreen}
          options={{
            headerShown:true,
            title:'Selecciona un Rol'
          }}
        
        />
        <Stack.Screen
          name="ClientTabsNavigator"
          component={ClientTabsNavigator}
 
        />
<Stack.Screen
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;