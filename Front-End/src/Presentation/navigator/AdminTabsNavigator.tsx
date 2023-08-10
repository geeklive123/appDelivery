import { Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';


const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator  >
      <Tab.Screen
       name="AdminCategoryListScreen" 
       component={AdminCategoryListScreen}
       options={{
        title: 'Categorias',
        tabBarLabel:'Categorias',
        tabBarIcon:({color})=>(
          <Image
            source={require('../../../assets/list.png')}
            style={{ width:35, height: 35 }}
            />
        )
       }}/>
      <Tab.Screen name="AdminOrderListScreen" 
      component={AdminOrderListScreen}
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