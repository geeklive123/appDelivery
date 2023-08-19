import React,{useState,useContext} from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder'
import { Order } from '../../../../../Domain/entities/Order'
import { OrderContext } from '../../../../context/OrderContext'

const DeliveryOrderListViewModel=()=>{
    const{ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByStatus} =useContext(OrderContext);

    const getOrders= async (status:string)=>{
        const result = await getOrdersByStatus(status)
        
        console.log('Ordenes'+ JSON.stringify(result,null,3));
        
    }
    return{
        ordersPayed,
        ordersDispatched,
        ordersOnTheWay,
        ordersDelivery,
        getOrders
    }
}

export default DeliveryOrderListViewModel;