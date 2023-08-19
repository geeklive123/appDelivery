import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../views/home/Home';
import { RegisterScreen } from '../views/register/Register';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { RolesScreen } from '../views/roles/Roles';
import { ClientTabsNavigator } from './ClientTabsNavigator';
import { AdminTabsNavigator } from './AdminTabsNavigator';
import { ProfileUpdateScreen } from '../views/profile/update/ProfileUpdate';
import { User } from '../../Domain/entities/User';
import { UserProvider } from '../context/UserContext';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdateScreen } from '../views/admin/category/update/CategoryUpdate';
import { Category } from '../../Domain/entities/Category';
import { DeliveryTabsNavigator } from './DeliveryTabsNavigator';


export type RootStackParamList={
    HomeScreen:undefined,
    RegisterScreen:undefined,
    RolesScreen:undefined,
    AdminTabsNavigator:undefined,
    ClientTabsNavigator:undefined,
    ProfileUpdateScreen:{user:User},
    DeliveryTabsNavigator:undefined
    
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();
export const MainStackNavigator = () => {

   

  return (
    <UserState>
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
        name="AdminTabsNavigator"
        component={AdminTabsNavigator}

      />
       <Stack.Screen
        name="ClientTabsNavigator"
        component={ClientTabsNavigator}

      />
       <Stack.Screen
        name="DeliveryTabsNavigator"
        component={DeliveryTabsNavigator}

      />
    <Stack.Screen
        name="ProfileUpdateScreen"
        component={ProfileUpdateScreen}
        options={{
          headerShown:true,
          title:'Actualizar Usuario'
        }}
      />
      
    </Stack.Navigator>
    </UserState>
   
  )
}
const UserState =({children}:any)=>{
    return(
      <UserProvider>
        {children}
      </UserProvider>
    )
  }