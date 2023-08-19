import { Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { ClientCategoryListScreen } from '../views/client/category/list/CategoryList';
import { ClientStackNavigator } from './ClientStackNavigator';
import { ClientOrderStackNavigator } from './ClientOrderStackNavigator';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator  >
       <Tab.Screen 
        name="ClientStackNavigator" 
        component={ClientStackNavigator} 
        options={{
          title: 'Categorias',
          headerShown: false,
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/list.png') }
              style={{ width: 25, height: 25 }}
              />
          )
        }}
      />
      <Tab.Screen name="ClienteOrderListScreen" 
      component={ClientOrderStackNavigator}
      options={{
        title: 'Pedidos',
        tabBarLabel:'Pedidos',
        tabBarIcon:({color})=>(
          <Image
            source={require('../../../assets/orders.png')}
            style={{ width:35, height: 35 }}
            />
        )
       }}
      
      />
      <Tab.Screen name="ProfileInfoScreen"
      component={ProfileInfoScreen}
      options={{
        title: 'Perfil',
        tabBarLabel:'Perfil',
        tabBarIcon:({color})=>(
          <Image
            source={require('../../../assets/user_menu.png')}
            style={{ width:35, height: 35 }}
            />
        )
       }}
      
      />


    </Tab.Navigator>
  );
}