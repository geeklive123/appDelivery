import { Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { AdminCategoryNavigator } from './AdminCategoryNavigator';
import { AdminOrderStackNavigator } from './AdminOrderStackNavigator';
import { DeliveryOrderStackNavigator } from './DeliveryOrderStackNavigator';


const Tab = createBottomTabNavigator();

export const DeliveryTabsNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false
    }}
    >
  
      <Tab.Screen name="DeliveryOrderStackNavigator" 
      component={DeliveryOrderStackNavigator}
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