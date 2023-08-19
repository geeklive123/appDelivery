import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Order } from '../../Domain/entities/Order';
import { AdminOrderDetailScreen } from '../views/admin/order/detail/OrderDetail';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { OrderProvider } from '../context/OrderContext';
import { DeliveryOrderDetailScreen } from '../views/delivery/order/detail/OrderDetail';
import { DeliveryOrderListScreen } from '../views/delivery/order/list/OrderList';
import { DeliveryOrderMapScreen } from '../views/delivery/order/map/OrderMap';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { ClientOrderDetailScreen } from '../views/client/order/detail/OrderDetail';


export type ClientOrderStackParamList = {
    ClientOrderListScreen:undefined,
    ClientOrderDetailScreen:{order:Order}
}

const Stack = createNativeStackNavigator<ClientOrderStackParamList>();

export const ClientOrderStackNavigator = () => {
  return (
    <OrderStatus>
 <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

          <Stack.Screen
            name="ClientOrderListScreen"
            component={ClientOrderListScreen}
          />
          
           <Stack.Screen
            name="ClientOrderDetailScreen"
            component={ClientOrderDetailScreen}
            options={{
                headerShown:true,
                title:'Detalle de la orden'
            }}
          />
      </Stack.Navigator>
    </OrderStatus>
  
     
    
  )
}


const OrderStatus=({children}:any)=>{
  return(
    <OrderProvider>
      {children}
    </OrderProvider>
  )
}